import Link from "next/link";

import { PageHeader, PageLayout } from "@/components/PageLayout";
import { SanityImage } from "@/components/SanityImage";
import { formatBlogDate } from "@/lib/formatBlogDate";
import { getBlogPostsQuery } from "@/sanity/queries/blogPost";

export default async function BlogPage() {
  const posts = await getBlogPostsQuery();

  return (
    <PageLayout>
      <PageHeader title="Blog" />

      {posts.length ? (
        <section aria-labelledby="blog-posts-heading">
          <h2 id="blog-posts-heading" className="sr-only">
            Articoli
          </h2>

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {posts.map((post) => (
              <li key={post._id}>
                <Link
                  href={`/blog/${post.slug}`}
                  aria-labelledby={`blog-post-${post._id}`}
                  className="group flex h-full flex-col overflow-hidden border border-foreground bg-(--color-paper) transition-colors hover:bg-(--color-green-gd) focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {post.coverImage ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-(--color-green-gd)">
                      <SanityImage
                        value={post.coverImage}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
                      />
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex aspect-4/3 w-full items-center justify-center bg-(--color-green-gd) text-6xl"
                    >
                      ✸
                    </div>
                  )}

                  <div className="flex flex-1 flex-col items-start gap-4 p-6 sm:p-8">
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base">
                      <time dateTime={post.publishedAt}>
                        {formatBlogDate(post.publishedAt)}
                      </time>
                      {post.author?.name ? (
                        <>
                          <span aria-hidden="true">✸</span>
                          <span>{post.author.name}</span>
                        </>
                      ) : null}
                    </p>

                    <h2
                      id={`blog-post-${post._id}`}
                      className="text-xl font-bold leading-snug underline decoration-transparent underline-offset-4 transition group-hover:decoration-current group-focus-visible:decoration-current motion-reduce:transition-none sm:text-2xl"
                    >
                      {post.title}
                    </h2>

                    <p className="text-base leading-relaxed sm:text-lg">
                      {post.excerpt}
                    </p>

                    <span className="mt-auto bg-(--color-pink-gd) px-3 py-2 font-medium group-hover:bg-(--color-dark-pink-gd)">
                      Leggi il post
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p className="text-xl leading-relaxed">Non ci sono ancora articoli.</p>
      )}
    </PageLayout>
  );
}
