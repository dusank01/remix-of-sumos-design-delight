import { ClipboardList, BarChart3, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  step: string;
  badgeColor: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    step: "STEP 01",
    badgeColor: "bg-brand-blue",
    icon: ClipboardList,
    title: "Take a survey",
    desc: "It is a survey about students' green awareness and sustainable habits.",
  },
  {
    step: "STEP 02",
    badgeColor: "bg-brand-green",
    icon: BarChart3,
    title: "Launch benchmark",
    desc: "Compare your results with others based on gender, country, mobility participation, etc.",
  },
  {
    step: "STEP 03",
    badgeColor: "bg-brand-green-soft",
    icon: Lightbulb,
    title: "Get suggestions",
    desc: "See tips and recommendations to improve your sustainable habits and awareness.",
  },
];

export function StepCards() {
  return (
    <section id="survey" className="bg-background py-12">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-10 md:grid-cols-3">
        {steps.map(({ step, badgeColor, icon: Icon, title, desc }, i) => (
          <article
            key={title}
            className="relative rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
          >
            <span
              className={`absolute right-6 -top-3 rounded-md px-3 py-1 text-[10px] font-bold tracking-wider text-white ${badgeColor}`}
            >
              {step}
            </span>
            <div className="mb-4 grid h-20 w-20 place-items-center rounded-lg bg-secondary">
              <Icon
                className={
                  i === 0
                    ? "h-10 w-10 text-brand-blue"
                    : i === 1
                      ? "h-10 w-10 text-brand-green"
                      : "h-10 w-10 text-brand-green-soft"
                }
              />
            </div>
            <h3
              className={`mb-2 text-xl font-bold ${
                i === 0
                  ? "text-brand-blue"
                  : i === 1
                    ? "text-brand-green"
                    : "text-brand-green-soft"
              }`}
            >
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-brand-slate">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
