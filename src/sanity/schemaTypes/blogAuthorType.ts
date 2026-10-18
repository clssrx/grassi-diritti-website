import { UserIcon } from "@sanity/icons/User";
import { defineField, defineType } from "sanity";

export const blogAuthorType = defineType({
  name: "blogAuthor",
  title: "Autorə blog",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "name" },
  },
});
