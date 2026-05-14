import { GaugeChart } from "@/components/shared/GaugeChart";
import { useSurvey } from "@/contexts/SurveyContext";
import { getBadge, suggestions } from "@/data/mockData";
import {
  computeScores,
  BACKEND_CATEGORY_KEY,
  BACKEND_SUBCATEGORY_KEY,
  type HabitSubcategory,
  type MainCategory,
} from "@/lib/scoring";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import ecoGlobe from "@/assets/eco-profile-globe.png";

export function DetailedResults() {
  const { state, questions } = useSurvey();

  const local = computeScores(state.answers, questions);
  const backendCats = state.results?.categoryScores ?? {};
  const pick = (mainKey: MainCategory, localValue: number) =>
    backendCats[BACKEND_CATEGORY_KEY[mainKey]] ?? localValue;
  const pickSub = (subKey: HabitSubcategory) =>
    backendCats[BACKEND_SUBCATEGORY_KEY[subKey]] ?? local.subcategories[subKey];

  const score = state.results?.overallScore ?? local.overall;
  const badge = getBadge(score);

  const fmt = (n: number) =>
    n.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  const mainCategories: { name: MainCategory; value: number }[] = [
    { name: "Awareness", value: pick("Awareness", local.categories.Awareness) },
    { name: "Attitudes", value: pick("Attitudes", local.categories.Attitudes) },
    { name: "Habits", value: pick("Habits", local.categories.Habits) },
  ];

  const habitSubs: { name: HabitSubcategory; value: number }[] = [
    { name: "Travel", value: pickSub("Travel") },
    { name: "Living and accommodation", value: pickSub("Living and accommodation") },
    { name: "Buying and consumption", value: pickSub("Buying and consumption") },
    { name: "Digital habits", value: pickSub("Digital habits") },
    { name: "Community engagement", value: pickSub("Community engagement") },
  ];

  const suggestionFor = (cat: string): string[] => {
    const pool: string[] = [];
    if (cat === "Habits") {
      Object.values(suggestions).forEach((arr) =>
        arr.forEach((s) => s.tips.forEach((t) => pool.push(t))),
      );
    } else {
      pool.push(
        "Considering low-emission transport options",
        "Familiarity with green travel incentives",
        "Familiarity with green travel incentives",
        "Learning about sustainable travel options",
      );
    }
    return pool.slice(0, 4);
  };

  return (
    <div className="space-y-0">
      {/* Eco profile band */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-8 sm:px-10">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-[60px]">
            {/* Profile card */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-[320px] overflow-hidden rounded-xl border-4 border-brand-green bg-card px-8 py-8 shadow-[0_0_20px_rgba(94,98,120,0.08)] sm:w-[360px]">
                <div className="pointer-events-none absolute inset-0 rounded-[8px] border-[12px] border-[#f9f8d6]" />
                <div className="relative flex flex-col items-center gap-6">
                  <p className="text-2xl font-semibold text-[#444444]">My Eco Profile</p>
                  <img
                    src={ecoGlobe}
                    alt="Eco profile globe"
                    width={120}
                    height={120}
                    loading="lazy"
                    className="h-[120px] w-[120px] object-contain"
                  />
                  <p className="text-[32px] font-semibold text-brand-green">
                    {badge.name}
                  </p>
                </div>
              </div>
              <p className="text-2xl font-semibold text-brand-blue-deep">
                Your result is:{" "}
                <span className="font-bold text-brand-green">{fmt(score)}</span>
              </p>
            </div>

            {/* Description */}
            <div className="flex flex-1 flex-col justify-center gap-6 pt-2">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-brand-blue-deep">
                  Description
                </h3>
                <p className="text-base leading-relaxed text-[#444444] sm:text-lg">
                  Earned by participants who are{" "}
                  <strong className="font-semibold">moderately engaged</strong>{" "}
                  in green and sustainable behavior.
                </p>
                <p className="text-base leading-relaxed text-[#444444] sm:text-lg">
                  They{" "}
                  <strong className="font-semibold">make conscious choices</strong>{" "}
                  to reduce their environmental impact — such as using public
                  transport, saving energy and water, and occasionally choosing
                  eco-friendly options.
                </p>
              </div>
              <div className="flex justify-end">
                <Link
                  to="/survey/tips"
                  className="inline-flex items-center gap-1 rounded-lg px-6 py-3 text-base font-medium text-brand-blue hover:underline"
                >
                  View suggestions <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What should you do next? */}
      <section className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-8 sm:px-10">
          <h2 className="mb-8 text-[32px] font-bold text-brand-blue-deep sm:text-[40px]">
            What should you do next?
          </h2>

          <div className="h-px w-full bg-[#e5e7eb]" />

          {/* Main 3 categories */}
          <div className="mt-10 space-y-12">
            {mainCategories.map((cat) => {
              const value = cat.value;
              const tips = suggestionFor(cat.name);
              return (
                <div
                  key={cat.name}
                  className="flex w-full max-w-[680px] flex-col items-center gap-10 md:flex-row md:items-center md:gap-10"
                >
                  <div className="flex h-[280px] w-[320px] shrink-0 flex-col items-center justify-between rounded-xl border border-[#e5e7eb] bg-card pb-6 pt-8 shadow-[0_0_20px_rgba(94,98,120,0.08)]">
                    <p className="text-2xl font-semibold text-brand-blue-deep">
                      {cat.name}
                    </p>
                    <GaugeChart value={value} size={210} />
                  </div>
                  <div className="flex-1 space-y-4 py-6">
                    <h4 className="text-2xl font-semibold text-brand-blue-deep">
                      Suggestion
                    </h4>
                    <ul className="space-y-3 text-base text-[#444444]">
                      {tips.map((tip, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-brand-blue-deep">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Habit subcategory grid (3 + 2) */}
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6">
              {habitSubs.slice(0, 3).map((sub) => (
                <div
                  key={sub.name}
                  className="flex h-[240px] w-[280px] flex-col items-center justify-between rounded-xl border border-[#e5e7eb] bg-card py-6 shadow-[0_0_17px_rgba(94,98,120,0.08)]"
                >
                  <p className="px-4 text-center text-lg font-semibold text-brand-blue-deep">
                    {sub.name}
                  </p>
                  <GaugeChart value={sub.value} size={180} />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {habitSubs.slice(3).map((sub) => (
                <div
                  key={sub.name}
                  className="flex h-[240px] w-[280px] flex-col items-center justify-between rounded-xl border border-[#e5e7eb] bg-card py-6 shadow-[0_0_17px_rgba(94,98,120,0.08)]"
                >
                  <p className="px-4 text-center text-lg font-semibold text-brand-blue-deep">
                    {sub.name}
                  </p>
                  <GaugeChart value={sub.value} size={180} />
                </div>
              ))}
            </div>
          </div>

          {/* Send via email */}
          <div className="mt-12 flex justify-center">
            <Button className="h-12 w-[296px] gap-1 rounded-lg bg-brand-green text-base font-medium text-white hover:bg-brand-green/90">
              Send via email <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 sm:px-10">
          <h2 className="text-[32px] font-bold text-brand-blue-deep sm:text-[40px]">
            Next steps...
          </h2>
        </div>
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-12 sm:px-10">
          <Link
            to="/benchmark"
            className="group relative block rounded-lg border border-brand-green bg-card px-6 py-4 transition-shadow hover:shadow-[0_0_20px_rgba(94,98,120,0.12)]"
          >
            <span className="absolute -top-3 left-[244px] rounded-md bg-brand-green px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Step 02
            </span>
            <div className="flex flex-col gap-3">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-brand-green/10">
                <BarChart3 className="h-10 w-10 text-brand-green" />
              </div>
              <h3 className="text-[22px] font-bold text-brand-green">
                Launch benchmark
              </h3>
              <p className="text-base text-[#444444]">
                Compare your results with others based on gender, country,
                mobility participation, etc.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
