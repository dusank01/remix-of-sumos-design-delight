## Hero segment — 1:1 sa Figma (node 419:1742)

Doteruje postojeću `Hero.tsx` da tačno odgovara Figma specifikacijama.

### Specifikacije iz Figme

- Kontejner: `pt-[64px] pb-[24px] px-[160px]`, `max-w-[1440px]`
- Pozadinska oblast: veliki plavi oval levo (zadržati postojeći `bg-hero-bg`, doteran u veličini/poziciji)
- SuMoS logo: `w-[148.966px] h-[48px]` (postojeći `hero-sumos-logo.png`)
- Naslov: "Benchmarking tool" — Gilroy-Bold, **48px**, boja `#233662`
- Paragraf: **18px**, line-height **26px**, boja `#444`
  - Tekst: "The benchmarking tool is part of the Erasmus+ European Commission co-funded Education project **"Strengthening the Ecosystem for Sustainable Modern Industry"** (SuMoS)."
  - Bold deo u semibold weight
- CTA dugme:
  - Pozadina `#518efa`
  - `rounded-[8px]` (ne pill kao sad)
  - `px-[24px] py-[12px]`, gap 4px
  - Tekst "Take a survey" — 16px medium, bela
  - Ikona `ArrowRight` 24×24
- Desno: ilustracija likova (zadržati `hero-illustration.png`)
- Razmaci unutar leve kolone: `gap-[24px]` između logo bloka i tekst bloka, `gap-[16px]` između naslova i paragrafa, `gap-[28px]` između paragrafa i dugmeta

### Izmene u kodu

**`src/components/sumos/Hero.tsx`**
- Promeniti padding sekcije na `pt-16 pb-6 px-[160px]`
- Logo: postaviti tačnu širinu `w-[148.966px] h-[48px]`
- Naslov: `text-[48px] leading-tight text-[#233662]`
- Paragraf: `text-[18px] leading-[26px] text-[#444444]`, semibold span za citat
- Dugme: zameniti `rounded-full` sa `rounded-lg`, `bg-[#518efa]`, `px-6 py-3`, `text-white text-[16px]`
- Razmaci između elemenata u skladu sa specom

### Što ostaje isto

- Hero ilustracija (`hero-illustration.png`)
- SuMoS badge (`hero-sumos-logo.png`)
- Pozadinski oval (CSS `bg-hero-bg`)
- Struktura gridа 2 kolone

### Out of scope

- Ostali segmenti (StepCards, Statistics, Awareness, Institutions, Footer) — radimo posle, jedan po jedan.
