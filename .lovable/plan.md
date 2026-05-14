## Šta menjamo

1. **Brišemo `/survey/results` rutu i `src/pages/SurveyResults.tsx`** u potpunosti.
2. **Uklanjamo trenutni Step 2 finish ekran** (Congratulations / badge / bar chart / email kartica / 3 next-steps kartice) iz `src/pages/Survey.tsx`.
3. **Pravimo novu komponentu `src/components/survey/DetailedResults.tsx`** koja sadrži SAV vizuelni sadržaj sa stare `SurveyResults` stranice (eko profil, gauge chartovi po kategorijama, habit subkategorije, predlozi). Ova komponenta čita podatke iz `useSurvey()` baš kao stara stranica.
4. **Renderujemo `<DetailedResults />` inline** kao jedini sadržaj nakon submit-a u Survey flow-u (na mestu gde je sada Step 2).
5. **App.tsx**: brišemo import i `<Route path="/survey/results" />`. Link `/survey/results` u Survey.tsx (linija 843) više nije potreban — uklanjamo ga.

## O email-u (važno — odgovor na tvoje pitanje)

Tvoj snippet pokazuje da **NestJS backend već sam pravi HTML mejla** sa inline stilovima (`style="..."`). To je ispravan pristup za mejl jer:

- Mejl klijenti (Gmail, Outlook) **ne razumeju Tailwind klase, CSS varijable, `oklch()`, ni `<link>` na stylesheet**. Sve mora biti inline `style=""` na svakom elementu.
- React komponenta sa `className="bg-brand-blue rounded-xl"` se **ne može direktno "sibnuti" u mejl**. Klase bi stigle kao tekst, bez ijednog stila.

Zato **stilovi se NE dele između frontend komponente i mejla**. Ono što se deli su **PODACI** (`overallScore`, `categoryScores`, `subcategoryScores`). Frontend ih prikazuje kroz Tailwind/React; backend ih ubacuje u svoj HTML template sa inline stilovima.

**Šta ćeš ti uraditi na backend strani** (van ovog projekta — samo info):
- U `mailOptions.html` template-u, na osnovu `overallScore` i `categoryScores`, generiši `categoriesHtml` string sa `<li style="...">` elementima.
- Ako želiš da mejl vizuelno liči na `DetailedResults` komponentu, prepiši ključne sekcije (eko profil card, score box, lista kategorija sa progress bar-om kao `<div>` sa `style="background: linear-gradient(...)"`) ručno sa inline stilovima. Boje pokupi iz dizajn tokena (`#518efa` za brand blue itd.) i hardkoduj ih u template.
- Frontend submit poziv već šalje sve odgovore — backend računa skorove (kao što već radi u `state.results`) i ima sve što mu treba za HTML.

Ako kasnije poželiš da i frontend i mejl koriste **istu React komponentu**, moraćemo preći na `@react-email/components` + `render()` na backend-u (drugi setup, drugi paket). Za sada ostaje kako jeste: backend vlasnik HTML template-a.

## Tehnički detalji

**Fajlovi koji se menjaju:**
- `src/pages/SurveyResults.tsx` → brisanje
- `src/App.tsx` → ukloniti import + Route
- `src/pages/Survey.tsx` → ukloniti Step 2 JSX, renderovati `<DetailedResults />` umesto njega; ukloniti `link: "/survey/results"` referencu
- `src/components/survey/DetailedResults.tsx` → nov fajl, sadržaj iz starog `SurveyResults` (bez `<Layout>` i `<PageHeader>` wrapper-a — pošto se renderuje unutar Survey layout-a)

**Šta se ne menja:**
- `SurveyContext`, scoring logika, submit flow, "fill with random answers" dugme.
- Backend / mejl logika (to ti rešavaš van Lovable-a u NestJS-u).
