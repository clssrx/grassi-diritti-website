import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";
import Link from "next/link";

import type { RESOURCE_PAGE_QUERY_RESULT } from "@/sanity/types";

const linkClasses =
  "font-medium underline underline-offset-4 " +
  "hover:decoration-2 " +
  "focus-visible:rounded-sm " +
  "focus-visible:outline-2 " +
  "focus-visible:outline-offset-4";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="not-first:mt-4">{children}</p>,
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-7">{children}</ul>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
  },

  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : undefined;

      if (!href) {
        return <>{children}</>;
      }

      const isInternal = href.startsWith("/");

      if (isInternal) {
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
};

type Resource = NonNullable<
  NonNullable<RESOURCE_PAGE_QUERY_RESULT>["resources"]
>[number];

type ResourceContent = NonNullable<Resource["content"]>;

type ResourcePortableTextProps = {
  value: ResourceContent;
};

export function ResourcePortableText({ value }: ResourcePortableTextProps) {
  return (
    <PortableText
      value={value as PortableTextBlock[]}
      components={components}
    />
  );
}
