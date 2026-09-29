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

      ...S.documentTypeListItems().filter(
        (item) =>
          !["homepageSettings", "resourcePage"].includes(item.getId() ?? ""),
      ),
    ]);
