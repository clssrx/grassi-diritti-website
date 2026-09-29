import { notFound } from "next/navigation";

import { ResourcePage } from "@/components/ResourcePage";
import { getResourcePageQuery } from "@/sanity/queries/resourcePage";

export default async function RisorsePerPersoneGrassePage() {
  const data = await getResourcePageQuery("resources-fat-people");

  if (!data) {
    notFound();
  }

  return <ResourcePage data={data} resourcesTitle="Lista risorse:" />;
}
