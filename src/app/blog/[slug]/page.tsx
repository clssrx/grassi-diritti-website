import Link from "next/link";

const title =
  "Appropriazione del linguaggio anti-stigma da parte di case farmaceutiche e ob*soliog3";

export default function BlogPostPage() {
  return (
    <main className="flex flex-col gap-6 max-w-6xl mx-auto py-8 md:gap-8 md:py-8">
      <Link href="/blog" className="hover:underline">
        {"← Torna a tutti i post"}
      </Link>
      <div className="flex flex-col bg-(--color-paper) p-6 md:p-10 border gap-4 md:gap-8 ">
        <header className="flex flex-col gap-5 ">
          <h1 className="text-xl md:text-5xl font-bold">{title}</h1>

          <div className="flex flex-row items-center gap-4">
            <span className="text-sm md:text-lg">22/02/2026</span>
            <span>✸</span>
            <span className="text-sm md:text-lg">Autorx</span>
          </div>
        </header>

        <div className="w-full h-50 md:h-100 border"></div>

        <p className="text-justify text-md md:text-xl max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet. Sit doloribus doloribus eum possimus rerum
          id illum omnis sit dolorum rerum ut itaque quaerat aut aliquam
          voluptate aut doloribus commodi. Sed perferendis eius qui adipisci
          possimus aut optio natus ut adipisci fugiat et possimus voluptatem a
          earum fuga. Eum inventore sint aut voluptate sapiente a nobis totam ea
          omnis dolor. Eos rerum inventore ut voluptatem galisum aut dolorem
          ipsa qui atque corporis aut incidunt alias id explicabo labore. Eum
          dicta similique cum delectus ullam ea dolores assumenda et voluptatem
          doloremque. Id autem suscipit et ipsa quisquam qui minus praesentium.
          Et magnam dolores a error iusto id totam odio eum voluptates velit.
          Lorem ipsum dolor sit amet. Sit doloribus doloribus eum possimus rerum
          id illum omnis sit dolorum rerum ut itaque quaerat aut aliquam
          voluptate aut doloribus commodi. Sed perferendis eius qui adipisci
          possimus aut optio natus ut adipisci fugiat et possimus voluptatem a
          earum fuga. Eum inventore sint aut voluptate sapiente a nobis totam ea
          omnis dolor. Eos rerum inventore ut voluptatem galisum aut dolorem
          ipsa qui atque corporis aut incidunt alias id explicabo labore. Eum
          dicta similique cum delectus ullam ea dolores assumenda et voluptatem
          doloremque. Id autem suscipit et ipsa quisquam qui minus praesentium.
          Et magnam dolores a error iusto id totam odio eum voluptates velit.
        </p>
      </div>
    </main>
  );
}
