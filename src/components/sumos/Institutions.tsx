import logoFoi from "@/assets/logo-foi.png";
import logoEsiea from "@/assets/logo-esiea.png";
import logoZilina from "@/assets/logo-zilina.png";
import logoMaribor from "@/assets/logo-maribor.png";
import logoFon from "@/assets/logo-fon.png";

const items = [
  { name: "FOI", src: logoFoi },
  { name: "ESIEA", src: logoEsiea },
  { name: "University of Žilina", src: logoZilina },
  { name: "University of Maribor", src: logoMaribor },
  { name: "FON Belgrade", src: logoFon },
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
              className="grid h-[180px] place-items-center rounded-xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
            >
              <img
                src={it.src}
                alt={it.name}
                className="max-h-[120px] max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
