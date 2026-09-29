import { defineArrayMember, defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons/Home";

export const homepageSettingsType = defineType({
  name: "homepageSettings",
  title: "Impostazioni della Homepage",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titolo del sito",
      type: "string",
      validation: (rule) =>
        rule.required().error("Inserisci il titolo del sito."),
    }),
    defineField({
      name: "introText",
      title: "Introduzione homepage",
      description:
        "Breve testo introduttivo mostrato in apertura della homepage.",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule.required().error("Inserisci testo introduttivo del sito"),
    }),
    defineField({
      name: "logo",
      title: "Logo del sito",
      type: "image",
      options: { hotspot: true },
      validation: (rule) =>
        rule.required().error("Inserisci il logo del sito."),
    }),
    defineField({
      name: "newsTitle",
      title: "News title",
      description: "Titolo per la sezione novità del mese",
      type: "string",
      validation: (rule) =>
        rule.required().error("Inserisci il titolo della sezione novità."),
    }),
    defineField({
      name: "news",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
  ],
});
