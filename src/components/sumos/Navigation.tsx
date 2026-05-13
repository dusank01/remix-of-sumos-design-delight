import { Leaf } from "lucide-react";

const links = [
  { label: "SURVEY", href: "#survey" },
  { label: "BENCHMARK", href: "#benchmark" },
  { label: "STATISTICS", href: "#statistics" },
  { label: "TIPS AND TRICKS", href: "#tips" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`grid h-14 w-14 place-items-center rounded-full bg-brand-blue-deep ${className}`}>
      <Leaf className="h-6 w-6 text-brand-green-soft" />
    </span>
  );
}

export function Navigation() {
  return (
    <header className="w-full border-b border-border bg-background">
      <nav className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-10">
        <a href="/" className="flex items-center gap-3">
          <Logo />
          <span className="text-[12px] font-semibold leading-[1.35] text-brand-blue-deep">
            Strengthening the
            <br />
            ecosystem for
            <br />
            <span className="text-brand-green">sustainable</span> student
            <br />
            mobility
          </span>
        </a>
        <ul className="hidden items-center gap-10 text-[12px] font-semibold tracking-[0.14em] text-brand-slate md:flex">
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
