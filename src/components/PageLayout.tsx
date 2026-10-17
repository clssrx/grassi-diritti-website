import type { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 py-8 md:gap-14">
      {children}
    </main>
  );
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold leading-tight md:text-6xl">{title}</h1>
      {subtitle ? (
        <p className="text-xl leading-relaxed sm:text-2xl">{subtitle}</p>
      ) : null}
      {children}
    </header>
  );
}
