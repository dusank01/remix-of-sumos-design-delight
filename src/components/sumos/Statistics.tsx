import { ArrowRight, Info, ClipboardList, Hourglass } from "lucide-react";
import iconGlobe from "@/assets/icon-globe.gif";

const bars = [
  { label: "Awareness", value: 3.5 },
  { label: "Attitudes", value: 3.5 },
  { label: "Habits", value: 1.5 },
  { label: "Barriers", value: 2.8 },
];

function FootprintChart() {
  const max = 5;
  const ticks = [5, 4, 3, 2, 1, 0];
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-base font-semibold text-brand-blue-deep">
          Students ecological footprint
        </h3>
        <Info className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="flex gap-3">
        <div className="flex h-[180px] flex-col justify-between text-[11px] text-muted-foreground">
          {ticks.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="relative flex-1">
          {/* grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {ticks.map((t) => (
              <div key={t} className="h-px w-full bg-border" />
            ))}
          </div>
          <div className="relative flex h-[180px] items-end gap-8 px-6">
            {bars.map((b) => (
              <div key={b.label} className="flex flex-1 flex-col items-center">
                <div
                  className="w-full rounded-t-sm bg-brand-blue/85"
                  style={{ height: `${(b.value / max) * 100}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-8 px-6">
            {bars.map((b) => (
              <span key={b.label} className="flex-1 text-center text-[11px] text-muted-foreground">
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EcoScore() {
  const value = 4.7;
  const max = 5;
  const pct = value / max;
  // Semicircle: viewBox 200x110, arc from (10,100) to (190,100) radius 90
  const circ = Math.PI * 90;
  const dash = circ * pct;
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center">
      <h3 className="mb-2 text-base font-semibold text-brand-green">Eco score</h3>
      <div className="relative h-[120px] w-[220px]">
        <svg viewBox="0 0 200 110" className="h-full w-full">
          <path
            d="M10,100 A90,90 0 0 1 190,100"
            fill="none"
            stroke="hsl(220 13% 91%)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M10,100 A90,90 0 0 1 190,100"
            fill="none"
            stroke="var(--brand-green)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circ}`}
          />
        </svg>
        <div className="absolute inset-x-0 bottom-1 text-3xl font-extrabold text-brand-blue-deep">
          {value.toString().replace(".", ",")}
        </div>
      </div>
      <div className="-mt-2 flex w-[220px] justify-between px-3 text-xs text-muted-foreground">
        <span>0</span><span>5</span>
      </div>
      <p className="mt-3 text-sm text-brand-slate">
        The overall eco score is <span className="font-bold text-brand-blue-deep">Excellent</span>
      </p>
    </div>
  );
}

const stats = [
  { icon: ClipboardList, label: "NUMBER OF FILLED SURVEYS", value: "520", color: "text-brand-blue" },
  { icon: Hourglass, label: "AVERAGE COMPLETION TIME", value: "10m 42s", color: "text-brand-green-soft" },
  { icon: Globe2, label: "TOP ECO PROFILE", value: "Eco Explorer", color: "text-brand-green" },
];

export function Statistics() {
  return (
    <section id="statistics" className="bg-section-muted py-16">
      <div className="mx-auto max-w-[1280px] px-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-4xl font-extrabold text-brand-blue-deep">Explore statistics</h2>
          <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline">
            Go to statistics <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
          <FootprintChart />
          <EcoScore />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-6">
              <Icon className={`h-12 w-12 ${color}`} strokeWidth={1.6} />
              <div>
                <div className="text-[11px] font-semibold tracking-wider text-muted-foreground">{label}</div>
                <div className={`mt-1 text-lg font-bold ${color}`}>{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
