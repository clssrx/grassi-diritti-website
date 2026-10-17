import { defineQuery } from "next-sanity";

import { client } from "../lib/client";
import type { ARCHIVE_PAGE_QUERY_RESULT } from "../types";

const ARCHIVE_PAGE_QUERY = defineQuery(`
  *[_type == "archivePage"] | order(_updatedAt desc)[0]{
    title,
    intro,
    years | order(year desc)[]{
      _key,
      year,
      entries[]{
        _key,
        content[]{
          ...,
          markDefs[]{...},
          children[]{...}
        }
      }
    }
  }
`);

export async function getArchivePageQuery() {
  return await client.fetch<ARCHIVE_PAGE_QUERY_RESULT>(
    ARCHIVE_PAGE_QUERY,
    {},
    { next: { tags: ["archivePage"] } },
  );
}
