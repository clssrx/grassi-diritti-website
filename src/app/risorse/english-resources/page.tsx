const resourcesList = [
  `    Informed Consent for GLP-1 Agonists, here. You can download
    it here.
    `,
  `
    Read our report on fatness and abortion, created in
    collaboration with Aborto in Pillole and Women Help Women,
    here.
    `,
  `
  You can download our guides from the report on fatness and
  abortion, developed in collaboration with Aborto in Pillole and
  Women Help Women:
  
  - Guide for Fat People
  
  - Guide for Healthcare Professionals and Accompaniers
  
  - Guide for Reproductive Justice Organizations`,
];

const title = "Resources ";
const subtitile =
  "In this page you can find all the community resources we created";

export default function RisorsePerPersoneGrassePage() {
  return (
    <main className="flex flex-col gap-6 max-w-6xl mx-auto py-8 md:gap-14 md:py-12">
      <header className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>

        <p className="text-xl sm:text-2xl">{subtitile}</p>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl sm:text-3xl font-bold">Resources list:</h2>

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
