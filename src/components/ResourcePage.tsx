import type { RESOURCE_PAGE_QUERY_RESULT } from "@/sanity/types";

import { PageHeader, PageLayout } from "./PageLayout";
import { ResourcePortableText } from "./ResourcePortableText";

type ResourcePageProps = {
  data: NonNullable<RESOURCE_PAGE_QUERY_RESULT>;
  resourcesTitle: string;
};

export function ResourcePage({ data, resourcesTitle }: ResourcePageProps) {
  const { title, subtitle, resources } = data;

  return (
    <PageLayout>
      <PageHeader title={title} subtitle={subtitle} />

      {resources?.length ? (
        <section
          className="flex w-full flex-col gap-8"
          aria-labelledby="resources-heading"
        >
          <h2 id="resources-heading" className="text-xl font-bold sm:text-3xl">
            {resourcesTitle}
          </h2>

          <ul className="ml-2 flex w-full flex-col gap-8 pl-4 sm:ml-4 sm:pl-6">
            {resources.map((resource) => (
              <li
                key={resource._key}
                className="grid w-full grid-cols-[auto_minmax(0,1fr)] gap-4 border-b-2 border-(--color-salmon-pink-gd) pb-6 text-xl leading-relaxed last:border-b-0 sm:text-2xl"
              >
                <span aria-hidden="true" className="pt-1">
                  ✸
                </span>

                <div className="min-w-0">
                  <ResourcePortableText
                    value={resource.content.map((block) => ({
                      ...block,
                      children: block.children ?? [],
                      markDefs: block.markDefs ?? [],
                    }))}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </PageLayout>
  );
}
