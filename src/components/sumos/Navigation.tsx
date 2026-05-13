import { GraduationCap } from "lucide-react";

const links = [
  { label: "SURVEY", href: "#survey" },
  { label: "BENCHMARK", href: "#benchmark" },
  { label: "STATISTICS", href: "#statistics" },
  { label: "TIPS AND TRICKS", href: "#tips" },
];

function Logo() {
  return (
    <span className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-brand-blue-deep">
      <GraduationCap className="relative z-10 mb-2 h-6 w-6 text-white" strokeWidth={2.25} />
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-green to-brand-green-soft" />
    </span>
  );
}

export function Navigation() {
  return (
    <header className="w-full bg-background">
      <nav className="mx-auto flex h-[144px] max-w-[1440px] items-center justify-between px-[160px]">
        <a href="/" className="flex items-center gap-3">
          <Logo />
          <span className="text-[13px] font-semibold leading-[1.3] text-brand-blue-deep">
            Strengthening the
            <br />
            ecosystem for
            <br />
            <span className="text-brand-green">sustainable</span>{" "}
            <span className="text-brand-green">student</span>
            <br />
            mobility
          </span>
        </a>
        <ul className="hidden items-center gap-12 text-[13px] font-semibold tracking-[0.14em] text-brand-slate md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition-colors hover:text-brand-blue">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
