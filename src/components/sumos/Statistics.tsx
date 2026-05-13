import { ArrowRight, Info, ClipboardList, Hourglass } from "lucide-react";
import iconGlobe from "@/assets/icon-globe.gif";

const bars = [
  { label: "Awareness", value: 3.5, color: "#518efa" },
  { label: "Attitudes", value: 3.5, color: "#518efa" },
  { label: "Habits", value: 1.5, color: "#97bcff" },
  { label: "Barriers", value: 2.8, color: "#79a7f8" },
];

function FootprintChart() {
  const max = 5;
  const ticks = [5, 4, 3, 2, 1, 0];
  return (
    <div className="flex h-[288px] w-full flex-col gap-8 rounded-[12px] bg-white px-6 py-8 shadow-[0_0_20px_rgba(94,98,120,0.08)]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-semibold text-[#233662]">
          Students ecological footprint
        </h3>
        <Info className="h-6 w-6 text-[#444444]" />
      </div>
      <div className="flex flex-1 gap-3">
        <div className="flex flex-col justify-between text-right text-[12px] text-[#444444]">
          {ticks.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="relative flex-1">
          <div className="absolute inset-0 flex flex-col justify-between">
            {ticks.map((t) => (
              <div key={t} className="h-px w-full bg-[#e5e7eb]" />
            ))}
          </div>
          <div className="relative flex h-full items-end gap-12 px-8">
            {bars.map((b) => (
              <div key={b.label} className="flex flex-1 flex-col items-center">
                <div
                  className="w-full max-w-[100px]"
                  style={{ height: `${(b.value / max) * 100}%`, backgroundColor: b.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-12 pl-9 pr-2">
        {bars.map((b) => (
          <span key={b.label} className="flex-1 text-center text-[12px] text-[#444444]">
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function EcoScore() {
  const value = 4.7;
  const max = 5;
  const pct = value / max;
  const circ = Math.PI * 90;
  const dash = circ * pct;
  return (
    <div className="flex h-[288px] w-full flex-col items-center justify-between rounded-[12px] bg-white px-6 pb-6 pt-8 shadow-[0_0_20px_rgba(94,98,120,0.08)]">
      <h3 className="text-[20px] font-semibold text-[#64a550]">Eco score</h3>
      <div className="flex flex-col items-center">
        <div className="relative h-[120px] w-[212px]">
          <svg viewBox="0 0 200 110" className="h-full w-full">
            <path
              d="M10,100 A90,90 0 0 1 190,100"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M10,100 A90,90 0 0 1 190,100"
              fill="none"
              stroke="#64a550"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circ}`}
            />
          </svg>
          <div className="absolute inset-x-0 bottom-0 text-center text-[40px] font-bold leading-none text-[#233662]">
            {value.toString().replace(".", ",")}
          </div>
        </div>
        <div className="mt-1 flex w-[212px] justify-between px-2 text-[12px] text-[#bfbfbf]">
          <span>0</span>
          <span>5</span>
        </div>
      </div>
      <p className="text-center text-[16px] text-[#444444]">
        The overall eco score is
        <br />
        <span className="font-semibold">Excellent</span>
      </p>
    </div>
  );
}

type Stat =
  | { kind: "lucide"; Icon: typeof ClipboardList; label: string; value: string; color: string }
  | { kind: "img"; src: string; label: string; value: string; color: string };

const stats: Stat[] = [
  { kind: "lucide", Icon: ClipboardList, label: "Number of filled surveys", value: "520", color: "text-[#518efa]" },
  { kind: "lucide", Icon: Hourglass, label: "Average completion time", value: "10m 42s", color: "text-[#b6d989]" },
  { kind: "img", src: iconGlobe, label: "Top eco profile", value: "Eco Explorer", color: "text-[#64a550]" },
];

export function Statistics() {
  return (
    <section id="statistics" className="bg-[#f5f5f5] px-[160px] py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-[40px] font-bold text-[#233662]">Explore statistics</h2>
          <a
            href="#"
            className="inline-flex items-center gap-1 rounded-lg px-6 py-3 text-[16px] font-medium text-[#518efa]"
          >
            Go to statistics <ArrowRight className="h-6 w-6" />
          </a>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex items-start justify-between">
            <FootprintChart />
            <EcoScore />
          </div>

          <div className="flex items-stretch justify-between">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex w-[360px] items-center gap-4 rounded-lg border border-[#e5e7eb] bg-white p-6"
              >
                {s.kind === "lucide" ? (
                  <s.Icon className="h-14 w-14 text-[#233662]" strokeWidth={1.6} />
                ) : (
                  <img src={s.src} alt="" className="h-14 w-14 object-contain" />
                )}
                <div className="flex flex-col gap-4">
                  <div className="text-[16px] font-semibold uppercase text-[#444444]">{s.label}</div>
                  <div className={`text-[24px] font-bold ${s.color}`}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
