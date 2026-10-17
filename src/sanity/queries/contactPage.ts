import { defineQuery } from "next-sanity";

import { client } from "../lib/client";
import type { CONTACT_PAGE_QUERY_RESULT } from "../types";

const CONTACT_PAGE_QUERY = defineQuery(`
  *[
    _id == "contactPage" &&
    _type == "contactPage"
  ][0]{
    title,
    intro,
    emailAddress,
    instagramUrl,
    instagramUsername
  }
`);

export async function getContactPageQuery() {
  return await client.fetch<CONTACT_PAGE_QUERY_RESULT>(CONTACT_PAGE_QUERY, {});
}
