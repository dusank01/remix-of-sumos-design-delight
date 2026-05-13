import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/sumos/Navigation";
import { Hero } from "@/components/sumos/Hero";
import { StepCards } from "@/components/sumos/StepCards";
import { Statistics } from "@/components/sumos/Statistics";
import { Awareness } from "@/components/sumos/Awareness";
import { Institutions } from "@/components/sumos/Institutions";
import { Footer } from "@/components/sumos/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SuMoS — Benchmarking tool for sustainable student mobility" },
      {
        name: "description",
        content:
          "Benchmark students' green awareness and sustainable habits across Europe. Part of the Erasmus+ SuMoS project.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StepCards />
      <Statistics />
      <div className="hidden"><Awareness /></div>
      <Institutions />
      <Footer />
    </main>
  );
}
