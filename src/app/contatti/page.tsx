import Link from "next/link";

const title = "Contatti";
const subtitle = "Vuoi contattare o collaborare con Grassi Diritti?";

const mail = "grassidiritti@distruzione.org";
const instagram = {
  link: "https://www.instagram.com/grassidiritti/",
  username: "@grassidiritti",
};

export default function ContattiPage() {
  return (
    <main className="flex flex-col gap-6 max-w-5xl mx-auto py-8 md:gap-14 md:py-12">
      <header className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>

        <p className="text-xl sm:text-2xl">{subtitle}</p>
      </header>

      <section>
        <ul className="flex flex-col list-disc px-6 gap-8">
          <li className="text-xl sm:text-2xl">
            Scrivici una mail a{" "}
            <Link href={`mailto:${mail}`} className="font-bold">
              {mail}
            </Link>
          </li>

          <li className="text-xl sm:text-2xl">
            Segui il nostro profilo Instagram{" "}
            <Link href={instagram.link} className="font-bold">
              {instagram.username}
            </Link>
          </li>
        </ul>
      </section>
      {/* TBA contact form */}
    </main>
  );
}
