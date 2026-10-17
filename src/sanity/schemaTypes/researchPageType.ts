import { defineField, defineType } from "sanity";

export const researchPageType = defineType({
  name: "researchPage",
  title: "Ricerca",
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
      name: "formUrl",
      title: "URL del modulo",
      type: "url",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "image",
      title: "Immagine",
      type: "image",
    }),
  ],
});
