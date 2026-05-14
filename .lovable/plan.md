## Cilj

Trenutno `SurveyResults.tsx` koristi stari `surveyQuestions` iz `mockData.ts` sa ključevima poput `a1`, `h1`. Realna anketa (`Survey.tsx` + `SurveyContext`) čuva odgovore pod backend ključevima (`awareness_1`, `habits_travel_daily`, …) iz `MOCK_QUESTIONS`. Zato sve gauges trenutno prikazuju 0. Treba računati skorove iz stvarnih odgovora.

## Šta menjam

### 1) Novi helper `src/lib/scoring.ts`
Čista funkcija koja iz `state.answers` + `questions` (oboje već dostupno preko `useSurvey()`) vraća:
- `overall: number` (1–5)
- `categories: { Awareness, Attitudes, Habits }` (1–5)
- `subcategories: { Travel, "Living and accommodation", "Buying and consumption", "Digital habits", "Community engagement" }` (1–5)

Pravila:
- Računaju se samo `LIKERT` i `LIKERT-MATRIX` odgovori (skala 1–5).
- `LIKERT-MATRIX` doprinosi prosekom svojih sub-vrednosti.
- `SINGLE_CHOICE`, `NUMBER`, `TEXT`, demografija, barijere — ignorišu se za score.
- Ako za kategoriju nema odgovora → score 0.
- `overall` = prosek svih validnih likert vrednosti (svaki matrix ulaz brojan 1×).

Mapping UI labela → backend kategorije:
- Awareness ← `AWARENESS`
- Attitudes ← `ATTITUDES/MOTIVATIONS`
- Habits ← sve `HABITS - *` zajedno
- Travel ← `HABITS - Travel`
- Living and accommodation ← `HABITS - Living and accommodation`
- Buying and consumption ← `HABITS - Buying and consumption`
- Digital habits ← `HABITS - Digital habits`
- Community engagement ← `HABITS - Engagement in the community`

### 2) `src/pages/SurveyResults.tsx`
- Skinuti zavisnost od `surveyQuestions`/`state.answers[id]` lookup-a po starim ID-jevima.
- Pozvati novi `computeScores(state.answers, questions)` jednom; iz njega čitati sve vrednosti za:
  - hero "Your result is: X,X" i `getBadge(overall)`,
  - tri glavne `GaugeChart` kartice (Awareness / Attitudes / Habits),
  - pet `GaugeChart` mini-kartica (Travel, Living…, Buying…, Digital…, Community…).
- Ako su rezultati sa backend-a već stigli (`state.results`), preferirati ih (tačniji, jer backend nosi merodavnu logiku); inače fallback na lokalno računat skor. Ovo zadržava ispravno ponašanje kad backend bude vraćao `overallScore`/`categoryScores`.

### 3) Bez izmena
- `SurveyContext`, `questions.ts`, `mockData.ts` ostaju isti.
- Layout / dizajn sekcije se ne dira — menja se samo izvor brojeva.

## Tehnički detalji

```ts
// src/lib/scoring.ts
import type { AnswerValue, Question } from "@/types/survey";

export interface SurveyScores {
  overall: number;
  categories: { Awareness: number; Attitudes: number; Habits: number };
  subcategories: Record<
    "Travel" | "Living and accommodation" | "Buying and consumption"
      | "Digital habits" | "Community engagement",
    number
  >;
}

export function computeScores(
  answers: Record<string, AnswerValue>,
  questions: Question[],
): SurveyScores { /* avg LIKERT + LIKERT-MATRIX po kategoriji/podkategoriji */ }
```

U `SurveyResults.tsx`:
```ts
const { state, questions } = useSurvey();
const local = computeScores(state.answers, questions);
const overall = state.results?.overallScore ?? local.overall;
const awareness = state.results?.categoryScores?.["AWARENESS"] ?? local.categories.Awareness;
// ... isto za ostale; pa: <GaugeChart value={awareness} ... />
```

## Verifikacija
- Otvoriti `/survey`, popuniti par likert pitanja u različitim kategorijama, kliknuti dalje do submit-a.
- Na `/survey/results` proveriti da su brojevi u gauges različiti od 0 i da odgovaraju proseku unetih odgovora; "Your result is" odgovara `overall` i badge se menja u skladu sa skalom.
