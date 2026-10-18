import { defineQuery } from "next-sanity";

import { client } from "../lib/client";
import type { BLOG_POST_QUERY_RESULT, BLOG_POSTS_QUERY_RESULT } from "../types";

const BLOG_POSTS_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    defined(publishedAt)
  ] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    author->{name},
    coverImage{
      ...,
      asset->{_id, metadata{dimensions{width, height}}}
    }
  }
`);

const BLOG_POST_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    slug.current == $slug &&
    defined(publishedAt)
  ][0]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    author->{name},
    coverImage{
      ...,
      asset->{_id, metadata{dimensions{width, height}}}
    },
    body[]{
      ...,
      _type == "articleImage" => {
        ...,
        asset->{_id, metadata{dimensions{width, height}}}
      }
    }
  }
`);

const BLOG_CONTENT_TAGS = ["blogPost", "blogAuthor"];

export async function getBlogPostsQuery() {
  return await client.fetch<BLOG_POSTS_QUERY_RESULT>(
    BLOG_POSTS_QUERY,
    {},
    { next: { tags: BLOG_CONTENT_TAGS } },
  );
}

export async function getBlogPostQuery(slug: string) {
  return await client.fetch<BLOG_POST_QUERY_RESULT>(
    BLOG_POST_QUERY,
    { slug },
    { next: { tags: BLOG_CONTENT_TAGS } },
  );
}
