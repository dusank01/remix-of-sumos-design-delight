## Cilj
Uskladiti `/survey/results` 1:1 sa Figma dizajnom (node 419:3160). Trenutna implementacija je strukturno blizu, ali ima nekoliko vidljivih odstupanja u bojama, ikonama, tipografiji gauge-a i layout-u "Next steps" kartice.

## Šta menjam

### 1) `src/pages/SurveyResults.tsx`

**Eco Profile kartica**
- Unutrašnji bordur boju promeniti sa `border-brand-green-soft/50` na `#f9f8d6` (sumos/green/100 — krem-žuta, kao u Figmi). Bordur ostaje `border-[12px]` sa offset `-4px`.
- Globe ikonu zameniti sa pravom ilustracijom globusa (lokalni asset `src/assets/eco-profile-globe.png` koji ću dodati). Ukloniti kružni `bg-brand-green-soft/40` background — u Figmi nema kruga, samo slika 120×116.
- Tipografija: "My Eco Profile" 24px semibold `text-[#444]`, badge naziv 32px semibold `text-brand-green`, "Your result is:" 24px semibold blue + brojevi bold green. Već skoro tačno — sitna podešavanja.

**"What should you do next?" — 3 glavne kategorije**
- Trenutni kontejner za jedan red (kartica + lista) je `flex-1` (preuzima celu širinu). U Figmi red ima fiksno `w-[680px]` (320 kartica + 40 gap + 320 suggestion). Postaviti `max-w-[680px]`.
- Vrednost gauge-a u Figmi je 40px Bold u boji `brand-blue-deep` (ne foreground). To zahteva izmenu u `GaugeChart`.

**GaugeChart (`src/components/shared/GaugeChart.tsx`)**
- Izmeniti boju teksta vrednosti u `text-brand-blue-deep`.
- Proširiti boje arc-a sa 3 na 4 nivoa kako bi se reprodukovale boje iz Figme:
  - `>= 60%` → zelena `#64a550`
  - `40–60%` → plava `#518efa`
  - `25–40%` → narandžasto-žuta `#f0a500` (Attitudes 1.8 u dizajnu prikazuje žutu)
  - `< 25%` → crvena/tamna
- Font size value: omogućiti veći (40px za main, 34px za sub) — već skalira preko `size`, podesiti faktor da odgovara dizajnu (≈19% size).

**Habit sub-grid (3+2)**
- Trenutno je tačno (w-280, h-240, gap-6). Zadržati.

**Send via email dugme**
- Tačno (w-296, h-48, green). Zadržati.

**"Next steps" sekcija — Launch benchmark kartica**
- Layout u Figmi je VERTIKALAN: ikona (80×80) → naslov → opis, sve poređano u koloni `flex-col gap-3`, padding `px-6 py-4`. Trenutno je horizontalan (`flex items-start gap-4`). Promeniti u vertikalni.
- Širina kartice `w-full` (max-w 1106 ≈ 1120 minus margine). Step 02 badge ostaje absolute `left-[244px] top-[-12px]`.
- Ikonu (BarChart3) zadržati kao Lucide u zelenoj boji (Figma asset `07 seo 1` je sitna SEO/tree ilustracija; bez direktne lucide alternative — `BarChart3` u brand-green daje najbliži vizuelni efekat bez dodatnog assets).
- Naslov "Launch benchmark" 22px bold green, opis 16px gray.
- Dekorativne squiggly strelice iz Figme (između footera i kartice) — preskočiti (čisto dekorativno).

**Container širina**
- Trenutni `max-w-[1120px]` mx-auto je već u skladu sa Figma 1440 viewport - 2×160 padding = 1120. Zadržati.

### 2) Novi asset
- `src/assets/eco-profile-globe.png` — preuzeti iz Figma local MCP servera (img13Globe1). Importovati ES6 i koristiti u Eco Profile kartici.

### 3) Bez izmena
- `SurveyContext`, `scoring.ts`, `mockData.ts`, ostale rute, navigacija, footer.

## Tehnički detalji (boje iz Figme)
- `sumos/blue/300` = `#233662` → već mapirano na `brand-blue-deep`
- `sumos/green/300` = `#64a550` → `brand-green`
- `sumos/green/100` = `#f9f8d6` → NOVO, koristiti kao inline arbitrary `[#f9f8d6]` (samo za ovaj inner border) — ne dodajem novi globalni token jer je samo jedna upotreba
- `sumos/gray/300` = `#444` → već koristim `text-[#444444]`
- `sumos/gray/100` = `#e5e7eb` → već koristim
- `sumos/blue/100` = `#518efa` → `brand-blue`

## Verifikacija
- Pre/posle screenshot na `/survey/results` u 1440px širini i upoređenje sa Figma frame 419:3160.
- Proveriti da Attitudes (npr. 1.8) prikazuje žuti arc, Awareness/Habits zeleni, sub-kategorije plavi.
- Provera da "Launch benchmark" kartica ima vertikalan layout i Step 02 badge na pravoj poziciji.
