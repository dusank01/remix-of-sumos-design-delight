import { GraduationCap } from "lucide-react";

const links = ["SURVEY", "BENCHMARK", "STATISTICS", "TIPS AND TRICKS"];

function Logo() {
  return (
    <a href="/" className="flex h-[100px] w-[233.645px] items-center gap-3" aria-label="SuMoS">
      <span className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full bg-[#233662]">
        <GraduationCap className="relative z-10 mb-1.5 h-6 w-6 text-white" strokeWidth={2.25} />
        <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#64a550] to-[#b6d989]" />
      </span>
      <span className="text-[13px] font-semibold leading-[1.3] text-[#233662]">
        Strengthening the
        <br />
        ecosystem for
        <br />
        <span className="text-[#64a550]">sustainable</span>{" "}
        <span className="text-[#64a550]">student</span>
        <br />
        mobility
      </span>
    </a>
  );
}

export function Navigation() {
  return (
    <header
      className="bg-white"
      style={{
        boxShadow:
          "0 13px 14px rgba(0,0,0,0.04), 0 50px 25px rgba(0,0,0,0.04), 0 114px 34px rgba(0,0,0,0.02), 0 202px 40.5px rgba(0,0,0,0.01)",
      }}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-[160px]">
        <Logo />
        <ul className="flex items-center gap-2">
          {links.map((label) => (
            <li key={label} className="flex h-[144px] items-center justify-center px-2">
              <a
                href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                className="whitespace-nowrap text-center text-[14px] font-medium uppercase text-[#233662] transition-colors hover:text-[#518efa]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
