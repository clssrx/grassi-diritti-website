import { notFound } from "next/navigation";

import { PageHeader, PageLayout } from "@/components/PageLayout";

import { getContactPageQuery } from "@/sanity/queries/contactPage";

export default async function ContattiPage() {
  const data = await getContactPageQuery();

  if (!data) {
    notFound();
  }

  return (
    <PageLayout>
      <PageHeader title={data.title} subtitle={data.intro} />

      <section>
        <ul className="flex flex-col px-6 gap-8">
          <li className="flex flex-row text-xl sm:text-2xl leading-relaxed gap-4">
            <span aria-hidden="true">✸</span>
            <span>
              Scrivici una mail a{" "}
              <a
                href={`mailto:${data.emailAddress}`}
                className="font-bold underline underline-offset-4"
              >
                {data.emailAddress}
              </a>
            </span>
          </li>

          <li className="flex flex-row text-xl sm:text-2xl leading-relaxed gap-4">
            <span aria-hidden="true">✸</span>
            <span>
              Segui il nostro profilo Instagram{" "}
              <a
                href={data.instagramUrl}
                className="font-bold underline underline-offset-4"
              >
                {data.instagramUsername}
              </a>
            </span>
          </li>
        </ul>
      </section>
      {/* TBA contact form */}
    </PageLayout>
  );
}
