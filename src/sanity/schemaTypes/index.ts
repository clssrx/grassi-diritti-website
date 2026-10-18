import { type SchemaTypeDefinition } from "sanity";

import { archivePageType } from "./archivePageType";
import { contactPageType } from "./contactPageType";
import { blogAuthorType } from "./blogAuthorType";
import { blogPostType } from "./blogPostType";
import { homepageSettingsType } from "./homepageSettingsType";
import { resourcePageType } from "./resourcePageType";
import { researchPageType } from "./researchPageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepageSettingsType,
    blogAuthorType,
    blogPostType,
    resourcePageType,
    researchPageType,
    contactPageType,
    archivePageType,
  ],
};
