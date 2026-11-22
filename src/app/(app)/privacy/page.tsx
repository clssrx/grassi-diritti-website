import type { Metadata } from "next";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Link from "next/link";

import { PageHeader, PageLayout } from "@/components/PageLayout";
import { getPrivacyPageQuery } from "@/sanity/queries/privacyPage";

export const metadata: Metadata = {
  title: "Privacy & Cookies",
  description: "Informativa privacy e cookie di Grassi Diritti.",
};

const sectionClass =
  "flex flex-col gap-3 border-t-2 border-(--color-salmon-pink-gd) pt-6 first:border-0 first:pt-0";
const headingClass = "text-xl font-bold sm:text-2xl";

const privacyTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h3: ({ children }) => (
      <h3 className="pt-2 text-lg font-bold sm:text-xl">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc space-y-2 pl-7">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-7">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : undefined;
      if (!href) return <>{children}</>;
      if (href.startsWith("/")) {
        return (
          <Link className="font-medium underline underline-offset-4" href={href}>
            {children}
          </Link>
        );
      }
      return (
        <a className="font-medium underline underline-offset-4" href={href}>
          {children}
        </a>
      );
    },
  },
};

export default async function PrivacyPage() {
  const privacy = await getPrivacyPageQuery();

  if (privacy?.sections?.length) {
    return (
      <PageLayout>
        <PageHeader title={privacy.title ?? "Privacy & Cookies"} />

        <article className="mx-auto flex w-full max-w-4xl flex-col gap-8 border border-foreground bg-(--color-paper) p-6 text-base leading-relaxed sm:p-10 sm:text-lg">
          {privacy.sections.map((section, index) => (
            <section
              key={section._key}
              className={`${sectionClass} ${index === 0 ? "border-0 pt-0" : ""}`}
            >
              <h2 className={headingClass}>{section.heading}</h2>
              {section.body?.length ? (
                <PortableText
                  value={section.body}
                  components={privacyTextComponents}
                />
              ) : null}
            </section>
          ))}
          {privacy.updatedAt ? (
            <p className="border-t-2 border-(--color-salmon-pink-gd) pt-4 text-sm">
              Versione aggiornata il {privacy.updatedAt}.
            </p>
          ) : null}
        </article>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHeader title="Privacy & Cookies" />

      <article className="mx-auto flex w-full max-w-4xl flex-col gap-8 border border-foreground bg-(--color-paper) p-6 text-base leading-relaxed sm:p-10 sm:text-lg">
        <p className="font-medium">(ai sensi dell’art. 13 del GDPR)</p>

        <section className={sectionClass}>
          <h2 className={headingClass}>Dati del titolare del trattamento</h2>
          <p>
            Grassi Diritti (in seguito, “Associazione” o “Titolare”), C.F.
            91480060374, con sede legale in Via Riva di Reno, 64, 40122 Bologna
            (BO), in qualità di titolare del trattamento, La informa ai sensi
            dell’art. 13 del Regolamento UE n. 2016/679 (in seguito, “GDPR”) che
            i Suoi dati saranno trattati con le modalità e per le finalità
            descritte nella seguente Informativa.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>1. Oggetto del trattamento</h2>
          <p>
            Il Titolare tratta i dati identificativi e i dati di utilizzo
            dell’interessato generati durante l’interazione con il sito web del
            Titolare (il “Sito”), raggiungibile all’indirizzo:
          </p>
          <p>
            <a
              className="font-bold underline underline-offset-4"
              href="https://www.grassidiritti.com"
            >
              https://www.grassidiritti.com
            </a>
          </p>
          <p>
            In seguito, “dati personali” o anche “Dati”.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Cookie e strumenti di tracciamento</h2>
          <p>
            Nel codice applicativo del sito non risultano integrati strumenti di
            analytics o script di tracciamento. Le modalità di utilizzo di
            eventuali cookie tecnici e di servizi attivati dall’hosting devono
            essere verificate sulla configurazione effettiva del sito; eventuali
            strumenti non tecnici saranno descritti qui e, quando richiesto,
            attivati solo dopo aver raccolto il consenso.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>2. Finalità e base giuridica del trattamento</h2>
          <p>I Suoi dati personali sono trattati per le seguenti finalità:</p>
          <ol className="list-[lower-alpha] space-y-2 pl-6">
            <li>
              consentire all’utente di inviare messaggi al Titolare. I messaggi
              potranno essere trasmessi tramite specifici form dei contatti
              presenti sul Sito, attraverso una mail e contattando il Titolare
              tramite mail;
            </li>
            <li>
              acquisire statistiche e metriche volte a garantire il corretto
              funzionamento del Sito;
            </li>
            <li>
              esercitare i diritti del Titolare (ad esempio il diritto di difesa
              in giudizio).
            </li>
          </ol>
          <p>Le basi giuridiche dei trattamenti sopra elencati sono le seguenti:</p>
          <p>
            Relativamente alla finalità a), dal momento che i documenti trasmessi
            potrebbero contenere “categorie particolari di dati”, la base
            giuridica è il consenso dell’interessato. La comunicazione dei
            suddetti dati è un requisito necessario per la presentazione del
            preventivo da parte del Titolare e per la successiva conclusione del
            contratto. In caso di mancata comunicazione dei dati, non sarà
            possibile procedere con la presentazione del preventivo. Potrà
            revocare il consenso al trattamento dati in qualsiasi momento senza
            pregiudicare la liceità del trattamento basata sul consenso prima
            della revoca.
          </p>
          <p>
            Relativamente alle finalità b) e c), la base giuridica è il legittimo
            interesse del Titolare del trattamento, ovvero quello di monitorare
            il corretto funzionamento del Sito ed esercitare diritti del
            Titolare quali la difesa in giudizio.
          </p>
          <p>
            Il conferimento dei dati per le finalità sopra elencate è
            facoltativo. In caso di mancata comunicazione dei Dati, non sarà
            possibile per Lei interagire correttamente con il Sito.
          </p>
          <p>
            Interagendo con il Sito, i Suoi dati personali potranno essere
            trattati mediante l’utilizzo di cookie, come descritto nella sezione
            “Cookie e strumenti di tracciamento” di questa pagina.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>3. Durata del trattamento</h2>
          <p>
            I dati personali saranno conservati per il tempo necessario ad
            adempiere alle finalità indicate nella presente Informativa. Il
            Titolare conserverà per dieci anni, come richiesto dal Codice Civile,
            copia della corrispondenza a rilevanza giuridica e commerciale. I
            dati personali dell’utente potranno infine essere conservati per il
            tempo necessario a garantire la difesa in giudizio o per perseguire
            eventuali abusi nell’utilizzo di questo Sito. In caso di
            accettazione del preventivo, il trattamento dei dati sarà disciplinato
            da apposita informativa ai sensi dell’art. 13 del GDPR per i clienti.
            Qualora il preventivo non venisse accettato, i dati contenuti nel
            materiale originale saranno eliminati.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>4. Comunicazione dei dati</h2>
          <p>
            I Dati dell’utente non saranno diffusi ma potranno essere resi
            accessibili, ove necessario per l’erogazione dei servizi o per legge:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              a dipendenti e collaboratori del Titolare in Italia e all’estero,
              nella loro qualità di soggetti autorizzati al trattamento di dati
              personali e/o amministratori di sistema;
            </li>
            <li>
              a società terze o altri soggetti (a titolo indicativo, istituti di
              credito, studi professionali, consulenti informatici, etc.) che
              svolgono attività in outsourcing per conto del Titolare, nella loro
              qualità di responsabili esterni del trattamento.
            </li>
          </ul>
          <p>
            Il Titolare potrà comunicare i Suoi Dati per le finalità di cui
            all’art. 2 a organismi di vigilanza, autorità giudiziarie, enti
            pubblici verso i quali è obbligatorio comunicare i Dati, nonché a
            quei soggetti ai quali la comunicazione sia obbligatoria per legge
            per l’espletamento delle finalità dette.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>5. Trasferimento dei dati</h2>
          <p>
            I dati personali sono conservati su server ubicati all’interno
            dell’Unione Europea, gestiti da società terze incaricate e debitamente
            nominate quali Responsabili del trattamento. Il Titolare potrà
            trasferire alcune categorie di Dati dell’utente in Paesi terzi
            rispetto all’Unione Europea. I Dati saranno trasferiti esclusivamente
            verso Paesi ritenuti adeguati dalla Commissione Europea o verso
            aziende che rispondano alle garanzie previste dagli artt. 44–50 del
            GDPR.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>6. Diritti dell’interessato</h2>
          <p>
            Potrà esercitare, in relazione al trattamento dei dati ivi descritto,
            i diritti previsti dal GDPR (artt. 15–22), ivi inclusi:
          </p>
          <ol className="list-[lower-alpha] space-y-2 pl-6">
            <li>ricevere conferma dell’esistenza dei Dati e accedere al loro contenuto (diritto di accesso);</li>
            <li>aggiornare, modificare e/o correggere i Dati (diritto di rettifica);</li>
            <li>
              chiedere la cancellazione o la limitazione del trattamento dei Dati
              trattati in violazione di legge, compresi quelli di cui non è
              necessaria la conservazione in relazione agli scopi per i quali i
              Dati sono stati raccolti o altrimenti trattati (diritto all’oblio
              e diritto alla limitazione);
            </li>
            <li>opporsi al trattamento (diritto di opposizione);</li>
            <li>
              proporre reclamo all’Autorità di controllo (Garante per la
              protezione dei dati personali, www.garanteprivacy.it) in caso di
              violazione della disciplina in materia di protezione dei dati
              personali;
            </li>
            <li>
              ricevere copia in formato elettronico dei Dati che La riguardano,
              quando tali Dati siano stati resi nel contesto del contratto, e
              chiedere che siano trasmessi a un altro titolare del trattamento
              (diritto alla portabilità dei dati).
            </li>
          </ol>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>
            7. Modalità di esercizio dei diritti e dati di contatto del Titolare
            del trattamento
          </h2>
          <p>
            Potrà in qualsiasi momento esercitare i diritti inviando una
            raccomandata A.R. a Grassi Diritti presso la sede legale oppure
            un’e-mail all’indirizzo PEC: {" "}
            <a className="font-bold underline underline-offset-4" href="mailto:grassidiritti@pec.it">
              grassidiritti@pec.it
            </a>
            .
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>8. Informazioni non contenute nella presente Informativa</h2>
          <p>
            Maggiori informazioni in relazione al trattamento dei dati personali
            potranno essere richieste in qualsiasi momento al Titolare del
            Trattamento utilizzando le informazioni di contatto sopra indicate.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>9. Modifiche alla presente Informativa</h2>
          <p>
            La presente Informativa può subire variazioni. Si consiglia, quindi,
            di controllare regolarmente questa pagina e di riferirsi alla
            versione più aggiornata.
          </p>
          <p>Versione aggiornata il 08/11/2026.</p>
          <p>Il Titolare: Grassi Diritti</p>
        </section>
      </article>
    </PageLayout>
  );
}
