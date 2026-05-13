import sumosLogo from "@/assets/hero-sumos-logo.png";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-background">
      <div className="mx-auto flex max-w-[1440px] items-start justify-between gap-6 px-6 py-10 sm:px-10 lg:px-[160px]">
        <div>
          <h1 className="font-display text-[32px] font-extrabold leading-tight text-[#233662] sm:text-[36px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-[14px] text-[#444444]">{subtitle}</p>
          )}
        </div>
        <img
          src={sumosLogo}
          alt="SuMoS"
          className="hidden h-[40px] w-auto object-contain sm:block"
        />
      </div>
      <div className="h-px w-full bg-[#e5e7eb]" />
    </div>
  );
}
