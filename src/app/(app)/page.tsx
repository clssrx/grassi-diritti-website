import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";
import { getHomePageSettingsQuery } from "@/sanity/queries/homePage";

const portableTextComponents: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const href = value?.href;

      if (!href) {
        return <>{children}</>;
      }

      const isExternal =
        href.startsWith("http://") || href.startsWith("https://");

      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {children}
            <span className="sr-only"> (si apre in una nuova scheda)</span>
          </a>
        );
      }

      return (
        <Link href={href} className="underline">
          {children}
        </Link>
      );
    },
  },
};

export default async function Home() {
  const data = await getHomePageSettingsQuery();

  if (!data) {
    return (
      <main className="py-12">
        <p>Impostazioni del sito non trovate.</p>
      </main>
    );
  }

  const { introText, title, logo, newsTitle, news } = data;

  const logoUrl = logo ? urlFor(logo).width(300).height(300).url() : null;

  return (
    <main className="flex flex-col gap-10 py-8 sm:py-16">
      <section className="grid gap-4 sm:gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:max-w-7xl">
        <div>
          <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
            {title}
          </h1>

          <p className="mt-7 max-w-7xl text-xl leading-normal tracking-[-0.02em] sm:text-2xl sm:leading-[1.2] md:mt-10 md:text-3xl md:leading-[1.15] lg:text-4xl">
            {introText}
          </p>
        </div>

        {logoUrl && (
          <div className="w-24 justify-self-end sm:w-28 md:w-40 md:justify-self-start lg:w-56 xl:w-64">
            <Image
              src={logoUrl}
              alt={
                logo?.decorative ? "" : (logo?.alt ?? "Logo di Grassi Diritti")
              }
              width={300}
              height={300}
              className="h-auto w-full rounded"
              priority
            />
          </div>
        )}
      </section>

      {news?.length ? (
        <section aria-labelledby="news-heading" className="flex flex-col gap-8">
          <h2 id="news-heading" className="text-2xl font-bold md:text-4xl">
            {newsTitle}
          </h2>

          <ul className="flex flex-col gap-6">
            {news.map((item) => (
              <li
                key={item._key}
                className="flex flex-row items-start gap-4 text-xl leading-relaxed md:text-2xl"
              >
                <span aria-hidden="true" className="mt-1 shrink-0">
                  ✸
                </span>

                <div className="min-w-0 flex-1">
                  <PortableText
                    value={item.content ?? []}
                    components={portableTextComponents}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
