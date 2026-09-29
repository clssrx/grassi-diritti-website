import type { RESOURCE_PAGE_QUERY_RESULT } from "@/sanity/types";

import { ResourcePortableText } from "./ResourcePortableText";

type ResourcePageProps = {
  data: NonNullable<RESOURCE_PAGE_QUERY_RESULT>;
  resourcesTitle: string;
};

export function ResourcePage({ data, resourcesTitle }: ResourcePageProps) {
  const { title, subtitle, resources } = data;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 py-8 md:gap-14">
      <header className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>

        <p className="text-xl leading-relaxed sm:text-2xl">{subtitle}</p>
      </header>

      {resources?.length ? (
        <section
          className="flex w-full flex-col gap-8"
          aria-labelledby="resources-heading"
        >
          <h2 id="resources-heading" className="text-xl font-bold sm:text-3xl">
            {resourcesTitle}
          </h2>

          <ul className="flex w-full flex-col gap-8">
            {resources.map((resource) => (
              <li
                key={resource._key}
                className="grid w-full grid-cols-[auto_minmax(0,1fr)] gap-4 text-xl leading-relaxed sm:text-2xl"
              >
                <span aria-hidden="true" className="pt-1">
                  ✸
                </span>

                <div className="min-w-0">
                  <ResourcePortableText value={resource.content ?? []} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
