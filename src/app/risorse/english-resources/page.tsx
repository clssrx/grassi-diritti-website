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
    <main className="flex flex-col gap-6">
      <h1 className="text-3xl md:text-7xl font-bold">{title}</h1>

      <p className=" text-lg">{subtitile}</p>

      <h2 className="text-xl font-bold">Resources list:</h2>

      <ul className="flex flex-col gap-2">
        {resourcesList.map((resource, index) => (
          <li key={index}>
            <span className="text-lg">• {resource}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
