import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GaugeChart } from "@/components/shared/GaugeChart";
import { BadgeDisplay } from "@/components/shared/BadgeDisplay";
import { useSurvey } from "@/contexts/SurveyContext";
import {
  surveyQuestions,
  getBadge,
  suggestions,
  type SurveyQuestion,
} from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";

export default function SurveyResults() {
  const { state, getScore } = useSurvey();
  const score = getScore();
  const badge = getBadge(score);

  const avg = (qs: SurveyQuestion[]) =>
    qs.length > 0
      ? Number(
          (
            qs
              .map((q: SurveyQuestion) => Number(state.answers[q.id]) || 0)
              .reduce((a: number, b: number) => a + b, 0) / qs.length
          ).toFixed(1),
        )
      : 0;

  const mainCategories = [
    { name: "Awareness", questions: surveyQuestions.filter((q: SurveyQuestion) => q.category === "Awareness") },
    { name: "Attitudes", questions: surveyQuestions.filter((q: SurveyQuestion) => q.category === "Attitudes") },
    { name: "Habits", questions: surveyQuestions.filter((q: SurveyQuestion) => q.category === "Habits") },
  ];

  const habitSubs = [
    { name: "Travel", questions: surveyQuestions.filter((q: SurveyQuestion) => q.subcategory === "Travel") },
    { name: "Living and accommodation", questions: surveyQuestions.filter((q: SurveyQuestion) => q.subcategory === "Living & accommodation") },
    { name: "Buying and consumption", questions: surveyQuestions.filter((q: SurveyQuestion) => q.subcategory === "Buying & consumption") },
    { name: "Digital habits", questions: surveyQuestions.filter((q: SurveyQuestion) => q.subcategory === "Digital habits") },
    { name: "Community engagement", questions: surveyQuestions.filter((q: SurveyQuestion) => q.subcategory === "Community engagement") },
  ];

  const suggestionFor = (cat: string): string[] => {
    const pool: string[] = [];
    if (cat === "Habits") {
      Object.values(suggestions).forEach((arr) =>
        arr.forEach((s) => s.tips.forEach((t) => pool.push(t))),
      );
    } else {
      // Generic eco tips for Awareness/Attitudes
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
    <Layout>
      <PageHeader
        title="View detailed results"
        subtitle="Students' Green Awareness and Sustainable Habits"
      />

      {/* Eco profile band (white) */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-10 sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            {/* Profile card */}
            <div className="rounded-xl border-2 border-brand-green-soft bg-card p-6 text-center shadow-[var(--shadow-card)]">
              <p className="mb-3 text-sm font-semibold text-brand-blue-deep">
                My Eco Profile
              </p>
              <BadgeDisplay name={badge.name} description="" size="lg" />
              <p className="mt-4 text-sm text-muted-foreground">
                Your result is:{" "}
                <span className="text-xl font-extrabold text-brand-blue-deep">
                  {score.toFixed(1).replace(".", ",")}
                </span>
              </p>
            </div>

            {/* Description */}
            <div className="flex flex-col justify-center">
              <h3 className="mb-3 text-base font-bold text-brand-blue-deep">
                Description
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-[#444444]">
                Earned by participants who are{" "}
                <strong>moderately engaged</strong> in green and sustainable
                behavior.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[#444444]">
                They <strong>make conscious choices</strong> to reduce their
                environmental impact — such as using public transport, saving
                energy and water, and occasionally choosing eco-friendly
                options.
              </p>
              <Link
                to="/survey/tips"
                className="inline-flex items-center text-sm font-semibold text-brand-blue hover:underline"
              >
                View suggestions <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* "What should you do next?" — gray section */}
      <section className="bg-[var(--section-muted)]">
        <div className="mx-auto max-w-[1100px] px-6 py-12 sm:px-10">
          <h2 className="mb-8 text-2xl font-extrabold text-brand-blue-deep">
            What should you do next?
          </h2>

          {/* Main 3 categories */}
          <div className="space-y-4">
            {mainCategories.map((cat) => {
              const value = avg(cat.questions);
              const tips = suggestionFor(cat.name);
              return (
                <div
                  key={cat.name}
                  className="grid items-center gap-6 rounded-xl bg-card p-5 shadow-[var(--shadow-card)] md:grid-cols-[220px_1fr]"
                >
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-xs font-semibold text-brand-blue-deep">
                      {cat.name}
                    </p>
                    <GaugeChart value={value} size={150} />
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-bold text-brand-blue-deep">
                      Suggestion
                    </h4>
                    <ul className="space-y-1.5 text-sm text-[#444444]">
                      {tips.map((tip, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-brand-green">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Habit subcategory grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {habitSubs.map((sub) => {
              const value = avg(sub.questions);
              return (
                <div
                  key={sub.name}
                  className="flex flex-col items-center rounded-xl bg-card p-5 shadow-[var(--shadow-card)]"
                >
                  <p className="mb-3 min-h-[32px] text-center text-xs font-semibold text-brand-blue-deep">
                    {sub.name}
                  </p>
                  <GaugeChart value={value} size={120} />
                </div>
              );
            })}
          </div>

          {/* Send via email */}
          <div className="mt-10 text-center">
            <Button className="rounded-full bg-brand-green px-10 py-6 text-white shadow-[var(--shadow-card)] hover:bg-brand-green/90">
              Send via email <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-12 sm:px-10">
          <h2 className="mb-6 text-2xl font-extrabold text-brand-blue-deep">
            Next steps...
          </h2>
          <Link
            to="/benchmark"
            className="group relative block rounded-xl border border-border bg-card p-6 pt-8 transition-shadow hover:shadow-[var(--shadow-card)]"
          >
            <span className="absolute -top-3 left-6 rounded-full bg-brand-green px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Step 02
            </span>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                <BarChart3 className="h-6 w-6 text-brand-blue" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-brand-green">
                  Launch benchmark
                </h3>
                <p className="text-sm text-[#444444]">
                  Compare your results with others based on gender, country,
                  mobility participation, etc.
                </p>
              </div>
              <ArrowRight className="mt-2 h-5 w-5 text-brand-blue-deep transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
