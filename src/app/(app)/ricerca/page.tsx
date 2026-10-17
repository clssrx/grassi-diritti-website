import Image from "next/image";
import { notFound } from "next/navigation";

import { PageHeader, PageLayout } from "@/components/PageLayout";
import { urlFor } from "@/sanity/lib/image";
import { getResearchPageQuery } from "@/sanity/queries/researchPage";

export default async function RicercaPage() {
  const data = await getResearchPageQuery();

  if (!data) {
    notFound();
  }

  const imageUrl = data.image?.asset
    ? urlFor(data.image).width(1754).url()
    : "/ricerca-submission-form.png";

  return (
    <PageLayout>
      <PageHeader title={data.title} subtitle={data.intro} />

      <div className="mx-auto w-full max-w-4xl">
        <a
          className="group block rounded-2xl focus-visible:outline-offset-8"
          href={data.formUrl}
          aria-label="Apri il modulo Google per richiedere supporto alla ricerca o collaborare con Grassi Diritti"
        >
          <Image
            className="h-auto w-full rounded-2xl shadow-md transition duration-200 group-hover:-translate-y-1 group-hover:shadow-xl motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
            src={imageUrl}
            alt=""
            width={1754}
            height={1588}
            loading="lazy"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </a>
      </div>
    </PageLayout>
  );
}
