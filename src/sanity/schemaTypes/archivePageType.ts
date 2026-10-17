import { defineArrayMember, defineField, defineType } from "sanity";

export const archivePageType = defineType({
  name: "archivePage",
  title: "Archivio",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Titolo",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "intro",
      title: "Introduzione",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "years",
      title: "Anni ed eventi",
      type: "array",
      of: [
        defineArrayMember({
          name: "archiveYear",
          title: "Anno",
          type: "object",
          fields: [
            defineField({
              name: "year",
              title: "Anno",
              type: "number",
              validation: (rule) =>
                rule.required().integer().min(1900).max(2100),
            }),
            defineField({
              name: "entries",
              title: "Eventi e pubblicazioni",
              type: "array",
              of: [
                defineArrayMember({
                  name: "archiveEntry",
                  title: "Voce",
                  type: "object",
                  fields: [
                    defineField({
                      name: "content",
                      title: "Contenuto",
                      type: "array",
                      of: [
                        defineArrayMember({
                          type: "block",
                          styles: [{ title: "Normale", value: "normal" }],
                          lists: [{ title: "Elenco", value: "bullet" }],
                          marks: {
                            decorators: [
                              { title: "Grassetto", value: "strong" },
                              { title: "Corsivo", value: "em" },
                            ],
                            annotations: [
                              {
                                name: "link",
                                title: "Link",
                                type: "object",
                                fields: [
                                  defineField({
                                    name: "href",
                                    title: "URL",
                                    type: "url",
                                    validation: (rule) => rule.required(),
                                  }),
                                ],
                              },
                            ],
                          },
                        }),
                      ],
                      validation: (rule) => rule.required().min(1),
                    }),
                  ],
                  preview: {
                    select: { content: "content" },
                    prepare({ content }) {
                      const firstBlock = content?.find(
                        (block: { _type?: string }) => block._type === "block",
                      );
                      const title =
                        firstBlock?.children
                          ?.map((child: { text?: string }) => child.text)
                          .join("") || "Voce";

                      return { title };
                    },
                  },
                }),
              ],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              year: "year",
              entries: "entries",
            },
            prepare({ year, entries }) {
              const entryCount = entries?.length ?? 0;
              return {
                title: year ? String(year) : "Anno",
                subtitle: `${entryCount} ${entryCount === 1 ? "voce" : "voci"}`,
              };
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});
