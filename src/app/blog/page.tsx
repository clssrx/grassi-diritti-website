import Link from "next/link";

const articles = [
  {
    date: "1",
    title:
      "Appropriazione del linguaggio anti-stigma da parte di case farmaceutiche e ob*soliog3",
    slug: "appropriazione-del-linguaggio",
  },

  {
    date: "2",
    title:
      "Appropriazione del linguaggio anti-stigma da parte di case farmaceutiche e ob*soliog3",
    slug: "appropriazione-del-linguaggio",
  },
  {
    date: "3",
    title:
      "Appropriazione del linguaggio anti-stigma da parte di case farmaceutiche e ob*soliog3",
    slug: "appropriazione-del-linguaggio",
  },
  {
    date: "4",
    title:
      "Appropriazione del linguaggio anti-stigma da parte di case farmaceutiche e ob*soliog3",
    slug: "appropriazione-del-linguaggio",
  },
  {
    date: "5",
    title:
      "Appropriazione del linguaggio anti-stigma da parte di case farmaceutiche e ob*soliog3",
    slug: "appropriazione-del-linguaggio",
  },
  {
    date: "6",
    title:
      "Appropriazione del linguaggio anti-stigma da parte di case farmaceutiche e ob*soliog3",
    slug: "appropriazione-del-linguaggio",
  },
];

export default function BlogPage() {
  return (
    <main className="flex flex-col gap-6 max-w-6xl mx-auto py-8 md:gap-14 md:py-8">
      <header className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-6xl font-bold">Blog</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 justify-between">
        {articles.map((article) => (
          <BlogPost
            key={article.date}
            title={article.title}
            slug={article.slug}
          />
        ))}
      </section>
    </main>
  );
}

type BlogPostProps = {
  title: string;
  slug: string;
};

function BlogPost({ title, slug }: BlogPostProps) {
  return (
    <div className="border max-w-fit p-8 max-h-fit flex flex-col items-start gap-4 bg-(--color-paper) shadow-md ">
      <div className="h-43 w-63 border"></div>
      <h2 className="font-bold text-lg">{title}</h2>

      <Link
        href={`/blog/${slug}`}
        className="p-2 bg-(--color-pink-gd) hover:bg-(--color-green-gd) self-end shadow-sm"
      >
        Leggi il post!
      </Link>
    </div>
  );
}
