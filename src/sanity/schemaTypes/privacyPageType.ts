import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { defineArrayMember, defineField, defineType } from "sanity";

export const privacyPageType = defineType({
  name: "privacyPage",
  title: "Privacy & Cookies",
  type: "document",
  icon: DocumentTextIcon,

  initialValue: {
    title: "Privacy & Cookies",
    sections: [],
  },

  fields: [
    defineField({
      name: "title",
      title: "Titolo pagina",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Sezioni dell’informativa",
      type: "array",
      of: [
        defineArrayMember({
          name: "privacySection",
          title: "Sezione",
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Titolo sezione",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "body",
              title: "Testo",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                  styles: [
                    { title: "Paragrafo", value: "normal" },
                    { title: "Sottotitolo", value: "h3" },
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
            select: { title: "heading" },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "updatedAt",
      title: "Data versione informativa",
      type: "date",
      options: { dateFormat: "DD/MM/YYYY" },
    }),
  ],

  preview: {
    select: { title: "title", subtitle: "updatedAt" },
  },
});
