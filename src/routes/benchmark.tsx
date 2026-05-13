import { createFileRoute } from "@tanstack/react-router";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { Navigation } from "@/components/sumos/Navigation";
import { Footer } from "@/components/sumos/Footer";
import sumosWordmark from "@/assets/sumos-wordmark.png";

export const Route = createFileRoute("/benchmark")({
  head: () => ({
    meta: [
      { title: "Benchmark — SuMoS" },
      {
        name: "description",
        content:
          "Benchmark your green score with a friend or yourself using a unique code.",
      },
      { property: "og:title", content: "Benchmark — SuMoS" },
      {
        property: "og:description",
        content: "Compare green scores 1-to-1 with another respondent.",
      },
    ],
  }),
  component: BenchmarkPage,
});

const radarData = [
  { axis: "Sustainable arrival", me: 2.5, mate: 4 },
  { axis: "Digital habits", me: 2.5, mate: 4 },
  { axis: "Food and consumption", me: 3, mate: 4 },
  { axis: "Living and accommodation", me: 4, mate: 3 },
];

function Gauge({
  value,
  fillRatio,
  color,
  trackColor = "#e9ecf1",
}: {
  value: number;
  fillRatio: number;
  color: string;
  trackColor?: string;
}) {
  const r = 90;
  const cx = 110;
  const cy = 110;
  const circ = Math.PI * r;
  const ratio = Math.max(0, Math.min(1, fillRatio));
  return (
    <div className="relative h-[167px] w-[212px]">
      <svg viewBox="0 0 220 130" className="block h-full w-full">
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke={trackColor}
          strokeWidth={20}
          strokeLinecap="round"
        />
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke={color}
          strokeWidth={20}
          strokeLinecap="round"
          strokeDasharray={`${circ * ratio} ${circ}`}
        />
      </svg>
      <div className="absolute left-0 right-0 top-[78px] text-center text-[40px] font-bold text-[#233662]">
        {value.toString().replace(".", ",")}
      </div>
      <div className="absolute left-[6px] top-[133px] text-[12px] text-[#bfbfbf]">
        0
      </div>
      <div className="absolute right-[6px] top-[133px] text-[12px] text-[#bfbfbf]">
        600
      </div>
    </div>
  );
}

function BenchmarkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page title band */}
      <section className="border-b border-[#bfbfbf] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-10 sm:px-10 lg:px-[160px]">
          <h1 className="text-[40px] font-bold leading-tight text-[#233662] md:text-[48px]">
            Benchmark
          </h1>
          <img
            src={sumosWordmark}
            alt="SuMoS"
            className="hidden h-12 w-auto md:block"
          />
        </div>
      </section>

      {/* Benchmark with a friend or yourself */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 pb-20 pt-8 sm:px-10 lg:px-[160px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-semibold leading-tight text-[#233662] md:text-[32px]">
              Benchmark with a friend or yourself
            </h2>
            <p className="text-[18px] leading-snug text-[#444] md:text-[20px]">
              This option allows user to{" "}
              <span className="font-semibold">make 1 to 1 benchmark</span> with
              other respondents, using their code.
            </p>
          </div>

          <div className="h-px w-full bg-[#e5e7eb]" />

          <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
            {/* Form card */}
            <div className="flex w-full shrink-0 flex-col items-center justify-between gap-6 rounded-[12px] bg-white px-4 py-6 shadow-[0_0_20px_0_rgba(94,98,120,0.08)] md:w-[280px]">
              <div className="flex w-full flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <label className="px-2 text-[14px] font-semibold text-[#444]">
                    Your code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your code"
                    className="h-10 w-full rounded-[4px] border border-[#bfbfbf] bg-white px-3 text-[16px] text-[#444] placeholder:text-[#bfbfbf] focus:border-[#518efa] focus:outline-none"
                  />
                  <button className="self-end pt-1 text-[12px] font-semibold text-[#518efa]">
                    Forgot your code?
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="px-2 text-[14px] font-semibold text-[#444]">
                    Another code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter another code"
                    className="h-10 w-full rounded-[4px] border border-[#bfbfbf] bg-white px-3 text-[16px] text-[#444] placeholder:text-[#bfbfbf] focus:border-[#518efa] focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-1">
                <button className="h-10 w-full rounded-[8px] bg-[#64a550] px-6 text-[16px] font-medium text-white transition-colors hover:bg-[#5a9347]">
                  Compare
                </button>
                <div className="h-8 w-[138px]" />
              </div>
            </div>

            {/* Ecological footprint card */}
            <div className="flex flex-1 flex-col gap-8 rounded-[12px] bg-white p-6 shadow-[0_0_10px_0_rgba(94,98,120,0.08)]">
              <div className="flex items-center justify-between">
                <h3 className="text-[24px] font-semibold leading-none text-[#233662]">
                  Students ecological footprint
                </h3>
                <span className="grid h-6 w-6 place-items-center rounded-full border border-[#bfbfbf] text-[12px] text-[#bfbfbf]">
                  i
                </span>
              </div>
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
                <div className="flex flex-1 flex-col items-center justify-center gap-4">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <div className="text-[20px] font-semibold leading-none text-[#64a550]">
                      Your green score
                    </div>
                    <div className="text-[18px] leading-none text-[#444]">
                      Overall
                    </div>
                  </div>
                  <Gauge value={4.8} fillRatio={0.8} color="#64a550" />
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-4">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <div className="text-[20px] font-semibold leading-none text-[#518efa]">
                      Another green score
                    </div>
                    <div className="text-[18px] leading-none text-[#444]">
                      Overall
                    </div>
                  </div>
                  <Gauge value={3.6} fillRatio={0.4} color="#518efa" />
                </div>
              </div>
            </div>

            {/* Radar card */}
            <div className="flex w-full shrink-0 flex-col items-center gap-6 rounded-[12px] bg-white py-6 shadow-[0_0_10px_0_rgba(94,98,120,0.16)] md:w-[300px]">
              <div className="flex w-full flex-col items-center gap-3">
                <h3 className="w-full px-6 text-[24px] font-semibold leading-none text-[#233662]">
                  Student mobility
                </h3>
                <div className="h-px w-full bg-[#e5e7eb]" />
              </div>
              <div className="h-[230px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius={75}>
                    <PolarGrid stroke="#bfbfbf" />
                    <PolarAngleAxis
                      dataKey="axis"
                      tick={{ fill: "#444", fontSize: 9 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 5]}
                      tick={{ fill: "#bfbfbf", fontSize: 8 }}
                      stroke="transparent"
                    />
                    <Radar
                      name="My colleague"
                      dataKey="mate"
                      stroke="#b6d989"
                      fill="#b6d989"
                      fillOpacity={0.55}
                    />
                    <Radar
                      name="Me"
                      dataKey="me"
                      stroke="#233662"
                      fill="#233662"
                      fillOpacity={0.35}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-[21px] bg-[#233662]" />
                  <span className="text-[14px] font-semibold text-[#444]">
                    Me
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-[21px] bg-[#b6d989]" />
                  <span className="text-[14px] font-semibold text-[#444]">
                    My colleague
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
