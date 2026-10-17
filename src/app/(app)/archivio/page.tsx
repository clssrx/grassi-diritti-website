import { notFound } from "next/navigation";

import { PageHeader, PageLayout } from "@/components/PageLayout";
import { ResourcePortableText } from "@/components/ResourcePortableText";
import { getArchivePageQuery } from "@/sanity/queries/archivePage";

export default async function ArchivioPage() {
  const data = await getArchivePageQuery();

  if (!data) {
    notFound();
  }

  return (
    <PageLayout>
      <PageHeader title={data.title} subtitle={data.intro} />

      {data.years?.map(({ _key, year, entries }, index) => {
        const entryCount = entries?.length ?? 0;

        return (
          <details
            key={_key}
            open={index === 0}
            className="group border-b-2 border-(--color-salmon-pink-gd) open:border-b-0"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-3xl marker:hidden focus-visible:outline-offset-2 sm:py-6 md:text-4xl">
              <span
                role="heading"
                aria-level={2}
                className="flex items-center gap-4"
              >
                <span className="bg-(--color-green-gd) p-2 font-bold">
                  {year}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-3 text-sm text-current/70 sm:text-base">
                <span>
                  {entryCount} {entryCount === 1 ? "voce" : "voci"}
                </span>
                <span
                  aria-hidden="true"
                  title="Espandi o comprimi l’anno"
                  className="text-3xl text-(--color-dark-pink-gd) transition-transform duration-200 group-open:rotate-45"
                >
                  ✸
                </span>
              </span>
            </summary>

            <ul className="ml-2 mt-2 flex flex-col gap-2 pb-6 pl-4 sm:ml-4 sm:gap-4 sm:pl-6">
              {entries?.map((entry) => (
                <li
                  key={entry._key}
                  className="border-b-2 border-(--color-salmon-pink-gd) p-2 text-xl leading-relaxed last:border-b-0 sm:text-2xl"
                >
                  <div className="flex flex-row gap-4 leading-relaxed">
                    <span aria-hidden="true">✸</span>
                    <div className="min-w-0">
                      <ResourcePortableText
                        value={entry.content.map((block) => ({
                          ...block,
                          children: block.children ?? [],
                          markDefs: block.markDefs ?? [],
                        }))}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </details>
        );
      })}
    </PageLayout>
  );
}
