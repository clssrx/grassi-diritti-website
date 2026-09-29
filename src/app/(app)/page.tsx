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
          <h1 className="line-clamp-2 text-[clamp(3.5rem,16vw,9rem)] font-semibold leading-[0.8] tracking-[-0.065em]">
            {title}
          </h1>

          <p className="mt-7 max-w-7xl text-xl leading-[1.15] tracking-[-0.02em] sm:text-2xl md:mt-10 md:text-3xl lg:text-4xl">
            {introText}
          </p>
        </div>

        {logoUrl && (
          <div className="w-30 justify-self-end sm:w-32 md:w-32 md:justify-self-start lg:w-53 xl:w-60">
            <Image
              src={logoUrl}
              alt="grassi diritti logo"
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
                className="flex flex-row gap-4 text-xl md:text-2xl"
              >
                <span aria-hidden="true">✸</span>

                <div>
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
