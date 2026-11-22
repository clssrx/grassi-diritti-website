import { defineQuery } from "next-sanity";

import { client } from "../lib/client";
import type { PRIVACY_PAGE_QUERY_RESULT } from "../types";

const PRIVACY_PAGE_QUERY = defineQuery(`
  *[_id == "privacyPage" && _type == "privacyPage"][0]{
    title,
    updatedAt,
    sections[]{
      _key,
      heading,
      body[]{
        ...,
        markDefs[]{...},
        children[]{...}
      }
    }
  }
`);

export async function getPrivacyPageQuery() {
  return await client.fetch<PRIVACY_PAGE_QUERY_RESULT>(
    PRIVACY_PAGE_QUERY,
    {},
    { next: { tags: ["privacyPage"] } },
  );
}
