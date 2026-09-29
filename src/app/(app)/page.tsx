import { urlFor } from "@/sanity/lib/image";
import { getHomePageSettingsQuery } from "@/sanity/queries/homePage";
import Image from "next/image";

const news = [
  {
    date: 1,
    text: "Articolo “Appropriazione del linguaggio anti-stigma da parte di case farmaceutiche e ob*soliog3” nella newsletter “dietassassina”",
    link: "https://alebruno.substack.com/p/appropriazione-del-linguaggio-anti",
  },
  {
    date: 2,
    text: "Possiamo aiutarti con la tua ricerca su grassezza e corpi grassi, vai alla la pagina Ricerca per informazioni dettagliate",
    link: "/ricerca",
  },
  {
    date: 3,
    text: "Consenso Informato sugli Agonisti del GLP-1, qui. Puoi scaricalo qui.",
    link: "",
  },
];

export default async function Home() {
  const data = await getHomePageSettingsQuery();

  if (!data) {
    return (
      <main className="py-12">
        <p>Impostazioni del sito non trovate.</p>
      </main>
    );
  }

  const { introText, title, logo, newsTitle } = data;

  const logoUrl = urlFor(logo).width(300).height(300).url();

  return (
    <main className="flex flex-col py-8 sm:py-16 gap-10">
      <section className="grid gap-4 sm:gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:max-w-7xl">
        <div>
          <h1 className="line-clamp-2 text-[clamp(3.5rem,16vw,9rem)] font-semibold leading-[0.8] tracking-[-0.065em] ">
            {title}
          </h1>
          <p className="mt-7 max-w-7xl text-xl leading-[1.15] tracking-[-0.02em] sm:text-2xl md:mt-10 md:text-3xl lg:text-4xl">
            {introText}
          </p>
        </div>

        <div className="w-30 justify-self-end sm:w-32 md:w-32 md:justify-self-start lg:w-53 xl:w-60">
          <Image
            src={logoUrl}
            alt="grassi diritti logo"
            width="300"
            height="300"
            className="h-auto w-full rounded"
            loading="eager"
          />
        </div>
      </section>

      <section
        aria-labelledby="news-heading"
        className="flex flex-col gap-8 bo"
      >
        <h2 className="text-2xl md:text-4xl font-bold" id="news-heading">
          {newsTitle}
        </h2>

        <ul className="flex flex-col gap-6">
          {news.map((n) => (
            <li
              key={n.date}
              className="text-xl md:text-2xl flex flex-row gap-4"
            >
              <span>✸</span>
              <span>{n.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* latest posts tba */}
    </main>
  );
}
