import navLogo from "@/assets/nav-logo.png";

const links = ["SURVEY", "BENCHMARK", "STATISTICS", "TIPS AND TRICKS"];

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
        <a href="/" className="block h-[100px] w-[233.645px] shrink-0" aria-label="SuMoS">
          <img src={navLogo} alt="SuMoS — Strengthening the ecosystem for sustainable student mobility" className="h-full w-full object-contain" />
        </a>
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
