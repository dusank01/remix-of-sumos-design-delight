import { ClipboardCheck, BarChart3, HandHelping } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  step: string;
  badgeBg: string;
  iconColor: string;
  titleColor: string;
  borderColor: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    step: "STEP 01",
    badgeBg: "bg-brand-blue",
    iconColor: "text-brand-blue",
    titleColor: "text-brand-blue",
    borderColor: "border-brand-blue/30",
    icon: ClipboardCheck,
    title: "Take a survey",
    desc: "It is a survey about students' green awareness and sustainable habits.",
  },
  {
    step: "STEP 02",
    badgeBg: "bg-brand-green",
    iconColor: "text-brand-green",
    titleColor: "text-brand-green",
    borderColor: "border-brand-green/30",
    icon: BarChart3,
    title: "Launch benchmark",
    desc: "Compare your results with others based on gender, country, mobility participation, etc.",
  },
  {
    step: "STEP 03",
    badgeBg: "bg-brand-green-soft",
    iconColor: "text-brand-green-soft",
    titleColor: "text-brand-green-soft",
    borderColor: "border-brand-green-soft/40",
    icon: HandHelping,
    title: "Get suggestions",
    desc: "See tips and recommendations to improve your sustainable habits and awareness.",
  },
];

export function StepCards() {
  return (
    <section id="survey" className="bg-background pb-16 pt-4">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-10 md:grid-cols-3">
        {steps.map(({ step, badgeBg, iconColor, titleColor, borderColor, icon: Icon, title, desc }) => (
          <article
            key={title}
            className={`relative rounded-xl border ${borderColor} bg-card p-6 pt-7`}
          >
            <span
              className={`absolute right-6 -top-3 rounded-md px-3 py-1 text-[10px] font-bold tracking-wider text-white ${badgeBg}`}
            >
              {step}
            </span>
            <Icon className={`mb-4 h-14 w-14 ${iconColor}`} strokeWidth={1.6} />
            <h3 className={`mb-2 text-xl font-bold ${titleColor}`}>{title}</h3>
            <p className="text-sm leading-relaxed text-brand-slate">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
