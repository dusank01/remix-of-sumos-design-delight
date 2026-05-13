import { ArrowRight } from "lucide-react";

const left = [
  { country: "Germany", value: 85 },
  { country: "France", value: 78 },
  { country: "Spain", value: 72 },
  { country: "Italy", value: 68 },
];
const right = [
  { country: "Poland", value: 65 },
  { country: "Netherlands", value: 62 },
  { country: "Belgium", value: 58 },
  { country: "Portugal", value: 52 },
];

function Bar({ country, value }: { country: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-brand-slate">{country}</span>
        <span className="font-semibold text-brand-blue-deep">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-brand-green" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function Awareness() {
  return (
    <section id="benchmark" className="bg-background py-20">
      <div className="mx-auto max-w-[1280px] px-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-4xl font-extrabold text-brand-blue-deep">Green awareness</h2>
          <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline">
            See full statistics <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* World map illustration (light dotted) */}
        <div className="mb-8 overflow-hidden rounded-xl border border-border bg-card p-8">
          <svg viewBox="0 0 1000 380" className="h-auto w-full text-border" aria-hidden>
            {Array.from({ length: 38 }).map((_, row) =>
              Array.from({ length: 100 }).map((_, col) => {
                // Rough world silhouette mask
                const x = col * 10 + 5;
                const y = row * 10 + 5;
                const cx = x - 500;
                const cy = y - 190;
                const land =
                  // Eurasia
                  (cx > -180 && cx < 280 && cy > -120 && cy < 30 &&
                    Math.sin((cx + cy) / 30) + Math.cos(cx / 40) > -0.3) ||
                  // Africa
                  (cx > -120 && cx < 60 && cy > 0 && cy < 140 &&
                    Math.cos(cx / 50) + Math.sin(cy / 40) > -0.4) ||
                  // Americas
                  (cx > -420 && cx < -200 && cy > -120 && cy < 160 &&
                    Math.sin((cx - cy) / 35) > -0.2) ||
                  // Oceania
                  (cx > 180 && cx < 300 && cy > 80 && cy < 140);
                if (!land) return null;
                return (
                  <circle key={`${row}-${col}`} cx={x} cy={y} r="1.4" fill="currentColor" />
                );
              })
            )}
          </svg>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <h3 className="mb-6 text-lg font-semibold text-brand-blue-deep">
            Level of awareness by country
          </h3>
          <div className="grid grid-cols-1 gap-x-20 gap-y-5 md:grid-cols-2">
            {left.map((c) => <Bar key={c.country} {...c} />)}
            {right.map((c) => <Bar key={c.country} {...c} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
