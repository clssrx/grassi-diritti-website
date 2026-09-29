import { type SchemaTypeDefinition } from "sanity";

import { homepageSettingsType } from "./homepageSettingsType";
import { resourcePageType } from "./resourcePageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepageSettingsType, resourcePageType],
};
