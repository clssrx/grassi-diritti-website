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

      {data.years?.map(({ _key, year, entries }) => (
        <section key={_key} className="flex flex-col gap-6">
          <h2 className="max-w-fit bg-(--color-green-gd) p-2 text-3xl font-bold">
            {year}
          </h2>

          <ul className="flex flex-col gap-4 px-10">
            {entries?.map((entry) => (
              <li
                key={entry._key}
                className="border-b-2 border-(--color-salmon-pink-gd) p-2 text-xl sm:text-2xl"
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
        </section>
      ))}
    </PageLayout>
  );
}
