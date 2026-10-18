import { type SchemaTypeDefinition } from "sanity";

import { archivePageType } from "./archivePageType";
import { contactPageType } from "./contactPageType";
import { homepageSettingsType } from "./homepageSettingsType";
import { resourcePageType } from "./resourcePageType";
import { researchPageType } from "./researchPageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepageSettingsType,
    resourcePageType,
    researchPageType,
    contactPageType,
    archivePageType,
  ],
};
