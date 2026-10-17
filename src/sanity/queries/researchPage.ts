// src/sanity/queries/researchPage.ts

import { defineQuery } from "next-sanity";

import { client } from "../lib/client";
import type { RESEARCH_PAGE_QUERY_RESULT } from "../types";

const RESEARCH_PAGE_QUERY = defineQuery(`
  *[
    _id == "researchPage" &&
    _type == "researchPage"
  ][0]{
    title,
    intro,
    formUrl,
    image
  }
`);

export async function getResearchPageQuery() {
  return await client.fetch<RESEARCH_PAGE_QUERY_RESULT>(
    RESEARCH_PAGE_QUERY,
    {},
    { next: { tags: ["researchPage"] } },
  );
}
