import { ArrowRight, Info, ClipboardCheck, Hourglass, Globe2 } from "lucide-react";

const bars = [
  { label: "Awareness", value: 92 },
  { label: "Attitudes", value: 92 },
  { label: "Habits", value: 38 },
  { label: "Barriers", value: 75 },
];

function FootprintChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-brand-blue-deep">
          Students ecological footprint
        </h3>
        <Info className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="flex h-[200px] gap-4 border-b border-l border-border pl-3">
        {bars.map((b) => (
          <div key={b.label} className="flex flex-1 flex-col items-center justify-end">
            <div
              className="w-full rounded-t-md bg-brand-blue/90"
              style={{ height: `${b.value}%` }}
              title={`${b.label}`}
            />
            <span className="mt-2 text-[11px] text-muted-foreground">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EcoScore() {
  const value = 4.7;
  const max = 5;
  const pct = value / max;
  const radius = 80;
  const circ = Math.PI * radius; // semicircle
  const dash = circ * pct;
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
      <h3 className="mb-4 text-base font-semibold text-brand-blue-deep">Eco score</h3>
      <div className="relative mx-auto h-[120px] w-[200px]">
        <svg viewBox="0 0 200 110" className="h-full w-full">
          <path
            d="M10,100 A90,90 0 0 1 190,100"
            fill="none"
            stroke="hsl(0 0% 92%)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M10,100 A90,90 0 0 1 190,100"
            fill="none"
            stroke="var(--brand-green)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circ}`}
          />
        </svg>
        <div className="absolute inset-x-0 bottom-2 text-3xl font-extrabold text-brand-green">
          {value.toString().replace(".", ",")}
        </div>
      </div>
      <div className="mt-2 flex justify-between px-2 text-xs text-muted-foreground">
        <span>0</span><span>5</span>
      </div>
      <p className="mt-2 text-sm text-brand-slate">
        The overall eco score is <span className="font-semibold text-brand-green">Excellent</span>
      </p>
    </div>
  );
}

const stats = [
  { icon: ClipboardCheck, label: "NUMBER OF FILLED SURVEYS", value: "520", color: "text-brand-blue" },
  { icon: Hourglass, label: "AVERAGE COMPLETION TIME", value: "10m 42s", color: "text-brand-blue-deep" },
  { icon: Globe2, label: "TOP ECO PROFILE", value: "Eco Explorer", color: "text-brand-green" },
];

export function Statistics() {
  return (
    <section id="statistics" className="bg-section-muted py-20">
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
            <div key={label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="grid h-14 w-14 place-items-center rounded-lg bg-secondary">
                <Icon className={`h-7 w-7 ${color}`} />
              </div>
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
