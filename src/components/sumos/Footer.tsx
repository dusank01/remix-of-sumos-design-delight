import { Leaf, User, Building2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] grid-cols-1 px-10 py-8 md:grid md:grid-cols-3 md:items-center md:gap-8">
        <div>
          <h4 className="mb-3 text-sm font-bold text-brand-blue-deep">Project Coordinator</h4>
          <p className="flex items-center gap-2 text-sm text-brand-slate">
            <User className="h-4 w-4" /> Assoc. Prof. Katarina Pažur Aničić, Ph. D.
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-brand-slate">
            <Building2 className="h-4 w-4" /> Faculty of Organization and Informatics, University of Zagreb
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-brand-slate">
            <Mail className="h-4 w-4" /> sumos@foi.unizg.hr
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 py-6 md:py-0">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-blue-deep">
            <Leaf className="h-6 w-6 text-brand-green-soft" />
          </span>
          <p className="text-[12px] font-semibold leading-[1.35] text-brand-blue-deep">
            Strengthening the
            <br />
            ecosystem for
            <br />
            <span className="text-brand-green">sustainable</span> student
            <br />
            mobility
          </p>
        </div>

        <div className="flex items-center justify-end gap-3">
          <p className="text-sm font-semibold text-brand-blue-deep">
            Co-funded by the
            <br />
            Erasmus+ Programme
            <br />
            of the European Union
          </p>
          <div className="grid h-12 w-16 place-items-center rounded bg-brand-blue text-white">
            <div className="grid grid-cols-3 gap-[2px]">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-yellow-300" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-section-muted py-4">
        <p className="mx-auto max-w-[1280px] px-10 text-center text-xs text-muted-foreground">
          The sole responsibility for the content of this website lies with the authors. It does not necessarily reflect the opinion of the European Union.
          <br />
          Copyright © 2025 FOI Varaždin. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
