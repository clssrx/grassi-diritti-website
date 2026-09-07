const resourcesList = [
  "Consenso Informato sugli Agonisti del GLP-1, qui. Puoi scaricalo qui",
  "Leggi il nostro report su grassezza e aborto in collaborazione con aborto in pillole e women help women qui. ",
  `Puoi scaricare le nostre guide dal report su grassezza e aborto in collaborazione con aborto in pilolle e women help women:

        - Guida per persone grasse

        - Guida per personale medico e accompagnanti

        - Guida per organizzazioni che si occupano di giustizia riproduttiva
`,
  `Cliccando su questo link potrai accedere alle slides presentate
    durante la prima conferenza grassa italiana 2026!`,

  `
    Cliccando su questo link potrai accedere alla guida “Abbattere
    le barriere. Affrontare fertilità e gravidanza in un corpo grasso”
    creata da Nicola Salmon e Grassi Diritti`,

  `
    Cliccando su questo link potrai accedere al verbale redatto
    dopo un’assemblea pubblica sull’approvazione della legge ddl
    pella. Qui puoi accedere al riassunto pubblicato su instagram.`,

  `
    Cliccando su questo link potrai accedere alla nostra traduzione
    del “fat liberation manifesto”`,
  `

    Cliccando su questo link potrai accedere ad una lista di
    professionisty del movimento non grassofobici creata da
    marianna the influenza.`,

  `
    Cliccando su questo link potrai accedere al nostro podcast.`,

  `
    Cliccando su questo link potrai accedere alla lista di brand di
    vestiti consigliati da e per persone grasse.`,
  "Consenso Informato sugli Agonisti del GLP-1, qui. Puoi scaricalo qui",
  "Leggi il nostro report su grassezza e aborto in collaborazione con aborto in pillole e women help women qui. ",
  `Puoi scaricare le nostre guide dal report su grassezza e aborto in collaborazione con aborto in pilolle e women help women:

        - Guida per persone grasse

        - Guida per personale medico e accompagnanti

        - Guida per organizzazioni che si occupano di giustizia riproduttiva
`,
  `Cliccando su questo link potrai accedere alle slides presentate
    durante la prima conferenza grassa italiana 2026!`,

  `
    Cliccando su questo link potrai accedere alla guida “Abbattere
    le barriere. Affrontare fertilità e gravidanza in un corpo grasso”
    creata da Nicola Salmon e Grassi Diritti`,

  `
    Cliccando su questo link potrai accedere al verbale redatto
    dopo un’assemblea pubblica sull’approvazione della legge ddl
    pella. Qui puoi accedere al riassunto pubblicato su instagram.`,

  `
    Cliccando su questo link potrai accedere alla nostra traduzione
    del “fat liberation manifesto”`,
  `

    Cliccando su questo link potrai accedere ad una lista di
    professionisty del movimento non grassofobici creata da
    marianna the influenza.`,

  `
    Cliccando su questo link potrai accedere al nostro podcast.`,

  `
    Cliccando su questo link potrai accedere alla lista di brand di
    vestiti consigliati da e per persone grasse.`,
];

const title = "Risorse per persone grasse";
const subtitile =
  "Se sei una persona grassa, qua puoi trovare tutte le risorse create da e per la comunità grassa.";

export default function RisorsePerPersoneGrassePage() {
  return (
    <main className="flex flex-col gap-6 max-w-5xl mx-auto py-8 md:gap-14 md:py-12">
      <header className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>

        <p className="text-xl sm:text-2xl">{subtitile}</p>
      </header>

      <section className="flex flex-col gap-6" aria-labelledby="resource-list">
        <h2 className="text-xl sm:text-2xl font-bold" id="resource-list">
          Lista risorse:
        </h2>

        <ul className="flex flex-col gap-6 text-justify">
          {resourcesList.map((resource, index) => (
            <li key={index}>
              <div className="flex flex-row text-xl sm:text-2xl leading-relaxed gap-4">
                <span>✸</span>
                <span>{resource}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
