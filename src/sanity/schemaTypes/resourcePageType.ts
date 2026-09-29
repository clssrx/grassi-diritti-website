import { defineArrayMember, defineField, defineType } from "sanity";

export const resourcePageType = defineType({
  name: "resourcePage",
  title: "Pagine risorse",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Titolo",
      type: "string",
      validation: (rule) =>
        rule.required().error("Inserisci il titolo della pagina."),
    }),

    defineField({
      name: "subtitle",
      title: "Introduzione",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule.required().error("Inserisci il testo introduttivo."),
    }),

    defineField({
      name: "resources",
      title: "Risorse",
      type: "array",

      of: [
        defineArrayMember({
          name: "resourceItem",
          title: "Risorsa",
          type: "object",

          fields: [
            defineField({
              name: "content",
              title: "Contenuto",
              type: "array",

              of: [
                defineArrayMember({
                  type: "block",

                  styles: [
                    {
                      title: "Normale",
                      value: "normal",
                    },
                  ],

                  lists: [
                    {
                      title: "Elenco",
                      value: "bullet",
                    },
                  ],

                  marks: {
                    decorators: [
                      {
                        title: "Grassetto",
                        value: "strong",
                      },
                      {
                        title: "Corsivo",
                        value: "em",
                      },
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

              validation: (rule) =>
                rule.required().error("Inserisci il contenuto della risorsa."),
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
                  .join("") || "Risorsa";

              return {
                title,
              };
            },
          },
        }),
      ],

      validation: (rule) =>
        rule.required().min(1).error("Aggiungi almeno una risorsa."),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});
