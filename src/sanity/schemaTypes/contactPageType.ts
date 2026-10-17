import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contatti",
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
      name: "emailAddress",
      title: "Indirizzo email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),

    defineField({
      name: "instagramUrl",
      title: "URL Instagram",
      type: "url",
      validation: (rule) =>
        rule.required().uri({ scheme: ["https"] }),
    }),

    defineField({
      name: "instagramUsername",
      title: "Nome utente Instagram",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
