type Inst = { name: string; sub?: string; color: string };

const items: Inst[] = [
  { name: "foi", color: "text-pink-600" },
  { name: "esiea", color: "text-white" },
  { name: "UNIVERSITY OF ZILINA", sub: "Faculty of Management Science and Informatics", color: "text-amber-600" },
  { name: "University of Maribor", sub: "Faculty of Organizational Sciences", color: "text-brand-blue-deep" },
  { name: "ΦΟΗ", sub: "UNIVERSITY OF BELGRADE\nFACULTY OF ORGANIZATIONAL SCIENCES", color: "text-brand-blue-deep" },
];

export function Institutions() {
  return (
    <section id="tips" className="bg-background pb-16 pt-8">
      <div className="mx-auto max-w-[1280px] px-10 text-center">
        <h2 className="mb-10 text-3xl font-extrabold text-brand-blue-deep">
          Explore Green practices by institution
        </h2>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
          {items.map((it) => (
            <div
              key={it.name}
              className="grid h-[180px] place-items-center rounded-xl border border-border bg-card p-4 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div
                  className={`text-2xl font-bold ${it.color} ${
                    it.name === "esiea" ? "rounded bg-sky-500 px-3 py-1 text-white" : ""
                  }`}
                >
                  {it.name}
                </div>
                {it.sub && (
                  <div className="mt-2 whitespace-pre-line text-[9px] font-semibold leading-tight text-brand-slate">
                    {it.sub}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
