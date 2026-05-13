import { Leaf, User, GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-10 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="mb-3 text-sm font-bold text-brand-blue-deep">Project Coordinator</h4>
            <p className="flex items-center gap-2 text-sm text-brand-slate">
              <User className="h-4 w-4" /> Assoc. Prof. Vesna Polov Bobic, Ph.D.
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm text-brand-slate">
              <GraduationCap className="h-4 w-4" /> Faculty of Organization and Informatics, University of Zagreb
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-blue-deep text-brand-green-soft">
              <Leaf className="h-6 w-6" />
            </span>
            <p className="text-xs font-semibold text-brand-blue-deep">
              Strengthening the ecosystem for{" "}
              <span className="text-brand-green">sustainable student mobility</span>
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue-deep">
              <span className="grid h-10 w-14 place-items-center rounded bg-brand-blue text-white text-[10px]">EU</span>
              Co-funded by the Erasmus+ Programme of the European Union
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-section-muted py-4">
        <p className="mx-auto max-w-[1280px] px-10 text-center text-xs text-muted-foreground">
          The European Commission's support for the production of this publication does not constitute an
          endorsement of the contents. Copyright © 2025 SuMoS. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
