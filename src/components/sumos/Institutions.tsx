const institutions = ["foi", "esiea", "Univ. A", "Faculty B", "ΦΟΗ"];

export function Institutions() {
  return (
    <section id="tips" className="bg-background pb-20 pt-8">
      <div className="mx-auto max-w-[1280px] px-10 text-center">
        <h2 className="mb-10 text-4xl font-extrabold text-brand-blue-deep">
          Explore Green practices by institution
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {institutions.map((n) => (
            <div
              key={n}
              className="grid aspect-square place-items-center rounded-xl border border-border bg-card text-2xl font-bold text-brand-blue shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
