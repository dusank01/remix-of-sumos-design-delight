interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-muted/40">
      <div className="mx-auto max-w-[1440px] px-6 py-8 sm:px-10 lg:px-[160px]">
        <h1 className="text-3xl font-extrabold text-[#233662]">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="h-1 bg-[#233662]" />
    </div>
  );
}
