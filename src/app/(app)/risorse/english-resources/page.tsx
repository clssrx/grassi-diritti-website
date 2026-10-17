import { notFound } from "next/navigation";

import { ResourcePage } from "@/components/ResourcePage";
import { getResourcePageQuery } from "@/sanity/queries/resourcePage";

export default async function EnglishResourcesPage() {
  const data = await getResourcePageQuery("resources-english");

  if (!data) {
    notFound();
  }

  return (
    <div lang="en">
      <ResourcePage data={data} resourcesTitle="Resources list:" />
    </div>
  );
}
