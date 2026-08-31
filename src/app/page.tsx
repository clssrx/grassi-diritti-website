import Image from "next/image";

const title = "Grassi Diritti";
const description =
  "Siamo una collettiva dal basso di ricerca-azione per la salute e laliberazione delle persone grasse. Adottiamo pratiche e politiche di liberazione del corpo grasso.";

export default function Home() {
  return (
    <main className="py-0 sm:py-8">
      <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:max-w-7xl">
        <div>
          <h1 className="line-clamp-2 text-[clamp(3.5rem,16vw,9rem)] font-semibold leading-[0.8] tracking-[-0.065em] ">
            {title}
          </h1>
          <p className="mt-7 max-w-7xl text-xl leading-[1.15] tracking-[-0.02em] sm:text-2xl md:mt-10 md:text-3xl lg:text-4xl">
            {description}
          </p>
        </div>

        <div className="w-28 justify-self-end sm:w-32 md:w-32 md:justify-self-start lg:w-53 xl:w-60">
          <Image
            src="/circle-ring-svgrepo-com.svg"
            alt="grassi diritti logo"
            width="300"
            height="300"
            color="black"
            className="h-auto w-full rounded-full"
          />
        </div>
      </section>

      {/* latest posts tba */}
    </main>
  );
}
