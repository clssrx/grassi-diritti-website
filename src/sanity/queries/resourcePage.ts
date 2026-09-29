import { defineQuery } from "next-sanity";

import { client } from "../lib/client";
import type { RESOURCE_PAGE_QUERY_RESULT } from "../types";

const RESOURCE_PAGE_QUERY = defineQuery(`
  *[
    _type == "resourcePage" &&
    _id == $id
  ][0]{
    title,
    subtitle,
    resources[]{
      _key,
      content
    }
  }
`);

export async function getResourcePageQuery(id: string) {
  return await client.fetch<RESOURCE_PAGE_QUERY_RESULT>(RESOURCE_PAGE_QUERY, {
    id,
  });
}
