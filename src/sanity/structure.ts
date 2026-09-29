import type { StructureResolver } from "sanity/structure";

const SINGLETON_TYPES = ["homepageSettings"];

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

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author", ...SINGLETON_TYPES].includes(
            item.getId()!,
          ),
      ),
    ]);
