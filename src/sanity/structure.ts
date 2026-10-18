import type { StructureResolver } from "sanity/structure";

const RESOURCE_PAGES = [
  {
    id: "resources-fat-people",
    title: "Per persone grasse",
  },
  {
    id: "resources-health-professionals",
    title: "Per professionisty della salute",
  },
  {
    id: "resources-english",
    title: "English resources",
  },
] as const;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage")
        .id("homepageSettings")
        .child(
          S.document()
            .schemaType("homepageSettings")
            .documentId("homepageSettings"),
        ),

      S.listItem()
        .title("Ricerca")
        .id("researchPage")
        .child(
          S.document().schemaType("researchPage").documentId("researchPage"),
        ),

      S.listItem()
        .title("Contatti")
        .id("contactPage")
        .child(
          S.document().schemaType("contactPage").documentId("contactPage"),
        ),

      S.listItem()
        .title("Risorse")
        .id("resources")
        .child(
          S.list()
            .title("Risorse")
            .items(
              RESOURCE_PAGES.map(({ id, title }) =>
                S.listItem()
                  .title(title)
                  .id(id)
                  .child(
                    S.document().schemaType("resourcePage").documentId(id),
                  ),
              ),
            ),
        ),

      S.listItem()
        .title("Blog")
        .id("blog")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.documentTypeListItem("blogPost").title("Articoli"),
              S.documentTypeListItem("blogAuthor").title("Autor3"),
            ]),
        ),

      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "homepageSettings",
            "researchPage",
            "contactPage",
            "resourcePage",
            "blogPost",
            "blogAuthor",
          ].includes(item.getId() ?? ""),
      ),
    ]);
