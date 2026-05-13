
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Info } from "lucide-react";
import { Navigation } from "@/components/sumos/Navigation";
import { Footer } from "@/components/sumos/Footer";
import sumosWordmark from "@/assets/sumos-wordmark.png";
import iconGlobe from "@/assets/icon-globe.gif";
import iconChecklistStat from "@/assets/icon-checklist-stat.svg";
import iconTimeStat from "@/assets/icon-time-stat.svg";


/* ---------- Footprint bar chart (top) ---------- */

const footprintBars = [
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
        <h3 className="text-[20px] font-semibold text-[#233662]">Students ecological footprint</h3>
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
            {footprintBars.map((b) => (
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
        {footprintBars.map((b) => (
          <span key={b.label} className="flex-1 text-center text-[12px] text-[#444444]">
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Green score gauge ---------- */

function GreenScore() {
  const value = 4.8;
  const max = 5;
  const pct = value / max;
  const r = 90;
  const circ = Math.PI * r;
  const dash = circ * pct;
  return (
    <div className="flex h-[288px] w-[360px] shrink-0 flex-col items-center justify-between rounded-[12px] bg-white px-6 pb-6 pt-8 shadow-[0_0_20px_rgba(94,98,120,0.08)]">
      <h3 className="text-[20px] font-semibold text-[#64a550]">Green score</h3>
      <div className="flex flex-col items-center">
        <div className="relative h-[110px] w-[212px]">
          <svg viewBox="0 0 212 110" className="h-full w-full">
            <path
              d="M16,106 A90,90 0 0 1 196,106"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="30"
              strokeLinecap="butt"
            />
            <path
              d="M16,106 A90,90 0 0 1 196,106"
              fill="none"
              stroke="#64A550"
              strokeWidth="30"
              strokeLinecap="butt"
              strokeDasharray={`${dash} ${circ}`}
            />
          </svg>
          <div className="absolute inset-x-0 bottom-1 text-center text-[40px] font-bold leading-none text-[#233662]">
            {value.toString().replace(".", ",")}
          </div>
        </div>
        <div className="mt-1 flex w-[212px] justify-between px-2 text-[12px] text-[#bfbfbf]">
          <span>0</span>
          <span>5</span>
        </div>
      </div>
      <p className="text-center text-[16px] text-[#444444]">
        The overall green score is
        <br />
        <span className="font-semibold">Excellent</span>
      </p>
    </div>
  );
}

/* ---------- Stat cards ---------- */

const stats = [
  { src: iconChecklistStat, label: "Number of filled surveys", value: "520", color: "text-[#518efa]" },
  { src: iconTimeStat, label: "Average completion time", value: "10m 42s", color: "text-[#b6d989]" },
  { src: iconGlobe, label: "Popular badge", value: "Eco Explorer", color: "text-[#64a550]" },
];

/* ---------- Sustainable behaviour bar chart ---------- */

const behaviourBars = [
  { label: "Awareness", value: 3.0, color: "#233662" },
  { label: "Attitudes", value: 3.0, color: "#518efa" },
  { label: "Habbits", value: 1.2, color: "#185904" },
  { label: "Barriers", value: 2.4, color: "#64a550" },
];

function SustainableBehaviour() {
  const max = 5;
  const ticks = [5, 4, 3, 2, 1, 0];
  return (
    <div className="flex h-[341px] w-[540px] shrink-0 flex-col gap-6 rounded-[12px] bg-white px-6 py-8 shadow-[0_0_10px_rgba(94,98,120,0.16)]">
      <div className="flex flex-col gap-6">
        <h3 className="text-[20px] font-semibold text-[#233662]">Sustainable bahaviour</h3>
        <div className="h-px w-full bg-[#e5e7eb]" />
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
          <div className="relative flex h-full items-end gap-8 px-6">
            {behaviourBars.map((b) => (
              <div key={b.label} className="flex flex-1 flex-col items-center">
                <div
                  className="w-full max-w-[64px]"
                  style={{ height: `${(b.value / max) * 100}%`, backgroundColor: b.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-8 pl-9 pr-6">
        {behaviourBars.map((b) => (
          <span key={b.label} className="flex-1 text-center text-[12px] text-[#444444]">
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Sustainable habits radar ---------- */

const radarCountries = ["Croatia", "France", "Slovakia", "Belgium", "Austria", "Switzerland", "Serbia"];

const radarSeries = [
  { name: "Travel", color: "#233662", values: [60, 50, 70, 40, 55, 45, 65] },
  { name: "Living and accomodation", color: "#b6d989", values: [80, 60, 50, 70, 45, 65, 55] },
  { name: "Food and consumption", color: "#64a550", values: [70, 75, 55, 50, 65, 70, 60] },
  { name: "Digital habits", color: "#518efa", values: [55, 65, 80, 60, 50, 55, 70] },
];

const radarData = radarCountries.map((country, i) => ({
  country,
  Travel: radarSeries[0].values[i],
  Living: radarSeries[1].values[i],
  Food: radarSeries[2].values[i],
  Digital: radarSeries[3].values[i],
}));

function SustainableHabits() {
  return (
    <div className="flex h-[341px] flex-1 flex-col gap-6 rounded-[12px] bg-white px-6 py-8 shadow-[0_0_10px_rgba(94,98,120,0.16)]">
      <div className="flex flex-col gap-6">
        <h3 className="text-[20px] font-semibold text-[#233662]">Sustainable habits</h3>
        <div className="h-px w-full bg-[#e5e7eb]" />
      </div>
      <div className="flex flex-1 items-center justify-between gap-4">
        <div className="h-[220px] w-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData} outerRadius="80%">
              <PolarGrid stroke="#bfbfbf" />
              <PolarAngleAxis dataKey="country" tick={{ fill: "#444444", fontSize: 10 }} />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: "#bdbdbd", fontSize: 9 }}
                tickCount={6}
                axisLine={false}
              />
              <Radar name="Travel" dataKey="Travel" stroke="#233662" fill="#233662" fillOpacity={0.25} />
              <Radar name="Living" dataKey="Living" stroke="#b6d989" fill="#b6d989" fillOpacity={0.35} />
              <Radar name="Food" dataKey="Food" stroke="#64a550" fill="#64a550" fillOpacity={0.3} />
              <Radar name="Digital" dataKey="Digital" stroke="#518efa" fill="#518efa" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <ul className="flex flex-col gap-3">
          {radarSeries.map((s) => (
            <li key={s.name} className="flex items-center gap-2">
              <span className="h-2 w-[21px]" style={{ backgroundColor: s.color }} />
              <span className="whitespace-nowrap text-[14px] font-semibold text-[#444444]">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

function StatisticsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page title bar */}
      <section className="border-b border-[#bfbfbf] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-10 sm:px-10 lg:px-[160px]">
          <h1 className="font-display text-[32px] font-bold text-[#233662] sm:text-[40px] md:text-[48px]">
            Statistics
          </h1>
          <img src={sumosWordmark} alt="SuMoS" className="h-12 w-auto" />
        </div>
      </section>

      {/* Top stats: footprint chart + green score + 3 stat cards */}
      <section className="bg-white pt-8 pb-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 sm:px-10 lg:px-[160px]">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_360px]">
            <FootprintChart />
            <GreenScore />
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex w-full items-center gap-4 rounded-lg border border-[#e5e7eb] bg-white p-6"
              >
                <img src={s.src} alt="" className="h-14 w-14 object-contain" />
                <div className="flex flex-col gap-4">
                  <div className="text-[16px] font-semibold uppercase text-[#444444]">{s.label}</div>
                  <div className={`text-[24px] font-bold ${s.color}`}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lower charts: behaviour + habits radar on gray bg */}
      <section className="bg-[#f5f5f5] py-10 pb-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 sm:px-10 lg:px-[160px] lg:flex-row lg:items-stretch">
          <SustainableBehaviour />
          <SustainableHabits />
        </div>
      </section>

      <Footer />
    </main>
  );
}
export default StatisticsPage;
