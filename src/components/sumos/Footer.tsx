import { Leaf, User, Building2, Mail } from "lucide-react";
import euLogo from "@/assets/eu-cofunded.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-6 py-8 sm:px-10 md:grid-cols-3 md:items-center lg:px-[160px]">
        <div>
          <h4 className="mb-3 text-sm font-bold text-brand-blue-deep">Project Coordinator</h4>
          <p className="flex items-center gap-2 text-sm text-brand-slate">
            <User className="h-4 w-4 shrink-0" />
            <span>Assoc. Prof. Katarina Pažur Aničić, Ph. D.</span>
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-brand-slate">
            <Building2 className="h-4 w-4 shrink-0" />
            <span>Faculty of Organization and Informatics, University of Zagreb</span>
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-brand-slate">
            <Mail className="h-4 w-4 shrink-0" />
            <span>sumos@foi.unizg.hr</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
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

        <div className="flex items-center justify-center md:justify-end">
          <img src={euLogo} alt="Co-funded by the Erasmus+ Programme of the European Union" className="h-14 w-auto" />
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
