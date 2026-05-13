import { ArrowRight, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Soft cloud background shape */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-16 h-[680px] w-[820px] rounded-[60%] bg-hero-bg"
      />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-10 py-20 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="mb-8 inline-flex items-center gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-brand-blue">
              SuM
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-blue-deep text-brand-green-soft">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="text-3xl font-extrabold tracking-tight text-brand-blue">
              S
            </span>
          </div>
          <h1 className="mb-6 font-display text-5xl font-extrabold leading-tight text-brand-blue-deep md:text-6xl">
            Benchmarking tool
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-brand-slate">
            The benchmarking tool is part of the Erasmus+ European Commission
            co-funded Education project{" "}
            <strong className="font-semibold text-brand-blue-deep">
              "Strengthening the Ecosystem for Sustainable Modern Industry"
            </strong>{" "}
            (SuMoS).
          </p>
          <a
            href="#survey"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_20px_-8px_rgb(81_142_250_/_0.6)] transition-transform hover:-translate-y-0.5"
          >
            Take a survey <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative flex justify-center">
          <img
            src={heroImg}
            alt="Student with laptop surrounded by European landmarks"
            width={1024}
            height={960}
            className="h-auto w-full max-w-[520px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
