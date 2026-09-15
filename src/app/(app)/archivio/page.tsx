const archiveData = {
  2026: [
    { id: 0, text: "Licheni Festival 2026" },
    { id: 1, text: "Ultragender Camp - Agape Centro Ecumenico 2026" },
    {
      id: 2,
      text: "Partecipato alla 12a Weight Stigma Conference ad Oslo, Norvegia",
    },
    {
      id: 3,
      text: "Primo Grosso Grasso Festival in collaborazione con Lucha Y Siesta",
    },
    { id: 4, text: "Laboratoria Grassa a Trieste" },
    {
      id: 5,
      text: "Pubblicato il report su Aborto e Grassezza con Aborto in Pillole e Women Help Women",
    },
    {
      id: 6,
      text: "Parlato in piazza a Novara e a Bologna durante il giorno internazionale per i diritti delle donne",
    },
    { id: 7, text: "Partecipato al primo convegno italiano inclusivo al peso" },
  ],
  2025: [
    { id: 0, text: "Licheni Festival 2026" },
    { id: 1, text: "Ultragender Camp - Agape Centro Ecumenico 2026" },
    {
      id: 2,
      text: "Partecipato alla 12a Weight Stigma Conference ad Oslo, Norvegia",
    },
    {
      id: 3,
      text: "Primo Grosso Grasso Festival in collaborazione con Lucha Y Siesta",
    },
    { id: 4, text: "Laboratoria Grassa a Trieste" },
    {
      id: 5,
      text: "Pubblicato il report su Aborto e Grassezza con Aborto in Pillole e Women Help Women",
    },
    {
      id: 6,
      text: "Parlato in piazza a Novara e a Bologna durante il giorno internazionale per i diritti delle donne",
    },
    { id: 7, text: "Partecipato al primo convegno italiano inclusivo al peso" },
  ],
  2024: [
    { id: 0, text: "Licheni Festival 2026" },
    { id: 1, text: "Ultragender Camp - Agape Centro Ecumenico 2026" },
    {
      id: 2,
      text: "Partecipato alla 12a Weight Stigma Conference ad Oslo, Norvegia",
    },
    {
      id: 3,
      text: "Primo Grosso Grasso Festival in collaborazione con Lucha Y Siesta",
    },
    { id: 4, text: "Laboratoria Grassa a Trieste" },
    {
      id: 5,
      text: "Pubblicato il report su Aborto e Grassezza con Aborto in Pillole e Women Help Women",
    },
    {
      id: 6,
      text: "Parlato in piazza a Novara e a Bologna durante il giorno internazionale per i diritti delle donne",
    },
    { id: 7, text: "Partecipato al primo convegno italiano inclusivo al peso" },
  ],
};

const title = "Archivio";
const subtitle =
  "In questa pagina puoi trovare l'elenco degli eventi che abbiamo organizzato o ai quali siamo state ospiti. L'obiettivo è mantenere un archivio storico per documentare la nostra parte di storia della comunità grassa italiana.";

export default function ArchivioPage() {
  return (
    <main className="flex flex-col gap-6 max-w-6xl mx-auto py-8 md:gap-14 md:py-8">
      <header className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>

        <p className="text-xl sm:text-2xl">{subtitle}</p>
      </header>

      {Object.entries(archiveData).map(([year, items]) => (
        <section key={year} className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold bg-(--color-green-gd) max-w-fit p-2">
            {year}
          </h2>

          <ul className="flex flex-col px-10 gap-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="text-xl sm:text-2xl border-b-2 border-(--color-salmon-pink-gd) p-2"
              >
                <div className="flex flex-row text-xl sm:text-2xl leading-relaxed gap-4">
                  <span>✸</span>
                  <span>{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
