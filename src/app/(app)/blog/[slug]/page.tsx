import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogPostBody } from "@/components/BlogPostBody";
import { PageHeader, PageLayout } from "@/components/PageLayout";
import { SanityImage } from "@/components/SanityImage";
import { formatBlogDate } from "@/lib/formatBlogDate";
import { getBlogPostQuery } from "@/sanity/queries/blogPost";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostQuery(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostQuery(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="flex flex-col gap-6 md:gap-8">
        <Link
          href="/blog"
          className="w-fit underline-offset-4 hover:underline focus-visible:underline"
        >
          ← Torna a tutti i post
        </Link>

        <article className="border bg-(--color-paper)">
          <div className="flex flex-col gap-6 p-6 sm:gap-8 sm:p-10">
            <div className="[&>header]:items-center [&>header>h1]:w-full [&>header>h1]:text-center [&>header>div]:justify-center">
              <PageHeader title={post.title}>
                <div className="flex flex-wrap items-center gap-3 text-sm sm:gap-4 sm:text-lg">
                  <time dateTime={post.publishedAt}>
                    {formatBlogDate(post.publishedAt)}
                  </time>
                  {post.author?.name ? (
                    <>
                      <span aria-hidden="true">✸</span>
                      <span> {post.author.name}</span>
                    </>
                  ) : null}
                </div>
              </PageHeader>
            </div>

            {post.coverImage ? (
              <figure>
                <SanityImage
                  value={post.coverImage}
                  sizes="(max-width: 1024px) 100vw, 1152px"
                  className="h-auto max-h-[70vh] w-full object-cover"
                />
                {post.coverImage.caption ? (
                  <figcaption className="mt-2 text-sm leading-relaxed sm:text-base">
                    {post.coverImage.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}

            <div className="mx-auto w-full max-w-3xl text-lg leading-relaxed sm:text-xl">
              <BlogPostBody value={post.body ?? []} />
            </div>
          </div>
        </article>
      </div>
    </PageLayout>
  );
}
