import { defineQuery } from "next-sanity";
import { client } from "../lib/client";
import { HOME_PAGE_SETTINGS_QUERY_RESULT } from "../types";

const HOME_PAGE_SETTINGS_QUERY = defineQuery(`
  *[
    _id == "homepageSettings" &&
    _type == "homepageSettings"
  ][0]{
    title,
    introText,
    newsTitle,
    logo,
    news[]{
      _key,
      content
    }
  }
`);

export async function getHomePageSettingsQuery() {
  return await client.fetch<HOME_PAGE_SETTINGS_QUERY_RESULT>(
    HOME_PAGE_SETTINGS_QUERY,
    {},
  );
}
