import { type SchemaTypeDefinition } from "sanity";

import { homepageSettingsType } from "./homepageSettingsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepageSettingsType],
};
