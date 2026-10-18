import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { defineArrayMember, defineField, defineType } from "sanity";

export const blogPostType = defineType({
  name: "blogPost",
  title: "Articolo blog",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titolo",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug URL",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Data di pubblicazione",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Autorə",
      type: "reference",
      to: [{ type: "blogAuthor" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Riassunto",
      description: "Breve testo mostrato nella lista degli articoli.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "coverImage",
      title: "Immagine di copertina",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Testo alternativo",
          type: "string",
          description:
            "Descrivi l'immagine per chi non può vederla. Se è decorativa, seleziona l'opzione qui sotto.",
          hidden: ({ parent }) => Boolean(parent?.decorative),
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context.parent as
                { decorative?: boolean } | undefined;
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
        defineField({
          name: "caption",
          title: "Didascalia",
          type: "string",
          description:
            "Aggiungi il contesto dell'immagine, per esempio data e luogo di un evento. Non ripetere il testo alternativo.",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Testo dell'articolo",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Paragrafo", value: "normal" },
            { title: "Titolo sezione", value: "h2" },
            { title: "Sottotitolo", value: "h3" },
            { title: "Citazione", value: "blockquote" },
          ],
          lists: [
            { title: "Elenco puntato", value: "bullet" },
            { title: "Elenco numerato", value: "number" },
          ],
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
                    validation: (rule) =>
                      rule.required().uri({ scheme: ["http", "https"] }),
                  }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          name: "articleImage",
          title: "Immagine",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Testo alternativo",
              type: "string",
              description:
                "Descrivi l'immagine. Se è decorativa, seleziona l'opzione qui sotto.",
              hidden: ({ parent }) => Boolean(parent?.decorative),
              validation: (rule) =>
                rule.custom((value, context) => {
                  const parent = context.parent as
                    { decorative?: boolean } | undefined;
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
            defineField({
              name: "caption",
              title: "Didascalia",
              type: "string",
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "coverImage",
    },
  },
});
