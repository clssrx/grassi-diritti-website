import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";
import Link from "next/link";

import type { BLOG_POST_QUERY_RESULT } from "@/sanity/types";

import { SanityImage } from "./SanityImage";

type BlogPost = NonNullable<BLOG_POST_QUERY_RESULT>;
type BlogPostBodyProps = {
  value: NonNullable<BlogPost["body"]>;
};

const linkClasses =
  "font-medium underline underline-offset-4 hover:decoration-2 " +
  "focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 last:mb-0">{children}</p>,
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-2xl font-bold sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-xl font-bold sm:text-2xl">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-(--color-salmon-pink-gd) pl-5 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc space-y-2 pl-7">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-2 pl-7">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : undefined;

      if (!href) {
        return <>{children}</>;
      }

      if (href.startsWith("/")) {
        return (
          <Link href={href} className={linkClasses}>
            {children}
          </Link>
        );
      }

      return (
        <a href={href} className={linkClasses}>
          {children}
        </a>
      );
    },
  },
  types: {
    articleImage: ({ value }) => (
      <figure className="my-8">
        <SanityImage
          value={value}
          className="h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
        {value.caption ? (
          <figcaption className="mt-2 text-base">{value.caption}</figcaption>
        ) : null}
      </figure>
    ),
  },
};

export function BlogPostBody({ value }: BlogPostBodyProps) {
  return (
    <PortableText
      value={value as PortableTextBlock[]}
      components={components}
    />
  );
}
