import Link from "next/link";

import { PageHeader, PageLayout } from "@/components/PageLayout";

const title = "Contatti";
const subtitle = "Vuoi contattare o collaborare con Grassi Diritti?";

const mail = "grassidiritti@distruzione.org";
const instagram = {
  link: "https://www.instagram.com/grassidiritti/",
  username: "@grassidiritti",
};

export default function ContattiPage() {
  return (
    <PageLayout>
      <PageHeader title={title} subtitle={subtitle} />

      <section>
        <ul className="flex flex-col px-6 gap-8">
          <li className="flex flex-row text-xl sm:text-2xl leading-relaxed gap-4">
            <span aria-hidden="true">✸</span>
            <span>
              Scrivici una mail a{" "}
              <Link
                href={`mailto:${mail}`}
                className="font-bold underline underline-offset-4"
              >
                {mail}
              </Link>
            </span>
          </li>

          <li className="flex flex-row text-xl sm:text-2xl leading-relaxed gap-4">
            <span aria-hidden="true">✸</span>
            <span>
              Segui il nostro profilo Instagram{" "}
              <Link
                href={instagram.link}
                className="font-bold underline underline-offset-4"
              >
                {instagram.username}
              </Link>
            </span>
          </li>
        </ul>
      </section>
      {/* TBA contact form */}
    </PageLayout>
  );
}
