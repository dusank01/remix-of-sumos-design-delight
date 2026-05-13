## Cilj

Preneti Survey i SurveyResults funkcionalnost iz `sumos-benchmarking-tool-front-feat-survey` (grana `feat/survey`) u trenutni Vite + React + React Router projekat, **bez ijedne izmene naziva** (pitanja, ID-jevi, payload polja, API endpoint-i) tako da mapiranje na backend ostane identično.

## Šta se kopira (1:1)

**Strane:**
- `src/pages/Survey.tsx` (874 linija)
- `src/pages/SurveyResults.tsx` (110 linija)
- `src/pages/SurveyTips.tsx` (već imamo `Tips.tsx` — ostaviću postojeću; SurveyTips iz repo-a se ne kopira osim ako tražiš)

**Survey podsistem:**
- `src/contexts/SurveyContext.tsx` — globalno stanje ankete
- `src/types/survey.ts` — Question / Submission tipovi
- `src/data/questions.ts` — fallback/mock pitanja
- `src/lib/api/questions.ts` — `fetchQuestions()` i `submitSurvey()` (koriste `VITE_API_HOST`)
- `src/components/survey/` — svih 7 komponenti:
  - ConsentStep.tsx
  - QuestionRenderer.tsx
  - SingleChoice.tsx
  - LikertMatrix.tsx
  - RubricMatrix.tsx
  - NumberInput.tsx
  - TextInput.tsx

## Integracija u postojeći projekat

1. **Rute** — dodati u `src/App.tsx`:
   - `/survey` → `Survey`
   - `/survey/results` → `SurveyResults`
   
   Postojeće rute (`/`, `/benchmark`, `/statistics`, `/tips`) ostaju netaknute.

2. **Provider** — `<SurveyProvider>` se dodaje u `src/main.tsx` oko `<App />` (unutar `QueryClientProvider`), tako da Survey i SurveyResults dele stanje.

3. **Navigacija** — postojeći link "SURVEY" u `Navigation.tsx` trenutno vodi na `/#survey`; menjam ga na `/survey` (ako želiš da ostane hash, reci).

4. **Toaster** — dodaću `<Toaster />` i `<Sonner />` (već postoje shadcn komponente) u `main.tsx` jer Survey koristi `useToast`.

5. **Env varijabla** — `VITE_API_HOST` se koristi za backend host. Ako nije set-ovan, fallback je relativan path (`/api/...`). Napomena ti: postavi `VITE_API_HOST` u Lovable secrets/env kad budeš spreman da pokažeš na pravi backend.

## Šta se NE menja (kritično)

- Nazivi pitanja, `questionId`, `category`, opcije i njihovi `value` u `data/questions.ts`
- Oblik `Submission` payload-a u `types/survey.ts`
- URL-ovi `/api/questions` i `/api/submissions`
- Polja u response-u (`overallScore`, `categoryScores`, `submissionId`)

## Zavisnosti

Sve potrebne pakete (`react-hook-form`, `@hookform/resolvers`, `zod`, radix komponente, `lucide-react`, `sonner`) već postoje u trenutnom `package.json` — nema novih instalacija.

## Šta NE kopiram (osim ako tražiš)

- `Suggestions.tsx`, `SuggestionDetail.tsx`, `SurveyTips.tsx`, `NotFound.tsx` (ti već imaš svoj NotFound u App.tsx)
- `mockSubmissions.ts`, `mockData.ts`
- `components/layout/`, `components/shared/`, `NavLink.tsx` (ti koristiš svoju `Navigation.tsx`)
- `Index.tsx`, `Statistics.tsx`, `Benchmark.tsx` iz repo-a (ti imaš svoje stilizovane verzije)

## Verifikacija nakon implementacije

- Build prolazi bez TS grešaka
- `/survey` se otvara i prikazuje prvi korak (Consent)
- Console nema grešaka
- Network tab: `GET /api/questions` se okida na učitavanju (404 je očekivan dok ne podigneš backend — nije bug)

## Pitanje pre nego što krenem

Da li da:
- (a) link "SURVEY" u nav-u promenim na `/survey` (preporučeno), ili
- (b) ostavim `/#survey` i samo dodam rute?
