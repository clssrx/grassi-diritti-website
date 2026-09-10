import Image from "next/image";
import Link from "next/link";

const title = "Ricerca";
const subtitle =
  "Se vuoi supporto con la tua ricerca, accademica o meno, su grassezza e corpi grassi, compila il form cliccando sulli'immagine qui sotto.";

export default function RicercaPage() {
  return (
    <main className="flex flex-col gap-6 max-w-6xl mx-auto py-8 md:gap-14 md:py-8">
      <header className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>

        <p className="text-xl sm:text-2xl">{subtitle}</p>
      </header>

      <div className="flex mx-auto">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdqDQ35FdMp_K6nhAHI9GC7hIV6ZAwDLyx3OckZ9ENFIxUO_g/viewform?usp=header"
          aria-label="Compila il form per segnalare una ricerca"
        >
          <Image
            src="/ricerca-submission-form.png"
            alt=""
            width={730}
            height={655}
            loading="lazy"
          />
        </Link>
      </div>

      {/* <div className="w-full">
        <iframe
          src={iframeSource}
          title="Form"
          loading="lazy"
          className="block w-full border-0 h-350 sm:h-312.5 md:h-287.5 lg:h-262.5"
        >
          Loading…
        </iframe>
      </div> */}
    </main>
  );
}
