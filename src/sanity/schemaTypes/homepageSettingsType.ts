import { defineArrayMember, defineField, defineType } from "sanity";

export const homepageSettingsType = defineType({
  name: "homepageSettings",
  title: "Homepage settings",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Titolo del sito",
      type: "string",
    }),

    defineField({
      name: "introText",
      title: "Introduzione homepage",
      type: "text",
    }),

    defineField({
      name: "logo",
      title: "Logo del sito",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          title: "Testo alternativo",
          type: "string",
          description:
            "Descrivi l'immagine. Se ripete il titolo o non aggiunge informazioni, seleziona l'opzione decorativa.",
          hidden: ({ parent }) => Boolean(parent?.decorative),
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context.parent as
                | { decorative?: boolean }
                | undefined;
              return parent?.decorative ||
                (typeof value === "string" && value.trim().length > 0)
                ? true
                : "Inserisci un testo alternativo o indica che l'immagine è decorativa.";
            }),
        }),
        defineField({
          name: "decorative",
          title: "Immagine decorativa",
          type: "boolean",
          initialValue: false,
          description:
            "Attiva se l'immagine non aggiunge informazioni e può essere ignorata da chi usa uno screen reader.",
        }),
      ],
    }),

    defineField({
      name: "newsTitle",
      title: "News title",
      type: "string",
      description: "Titolo per la sezione novità del mese",
    }),

    defineField({
      name: "news",
      title: "News",
      type: "array",
      of: [
        defineArrayMember({
          name: "newsItem",
          title: "News",
          type: "object",
          fields: [
            defineField({
              name: "content",
              title: "Testo",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                  marks: {
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                          {
                            name: "href",
                            type: "string",
                            title: "URL",
                          },
                        ],
                      },
                    ],
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              content: "content",
            },
            prepare({ content }) {
              const firstBlock = content?.find(
                (block: { _type?: string }) => block._type === "block",
              );

              const title =
                firstBlock?.children
                  ?.map((child: { text?: string }) => child.text)
                  .join("") || "News";

              return {
                title,
              };
            },
          },
        }),
      ],
    }),
  ],
});
