"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

const FIXED_DOCUMENT_TYPES = new Set(["homepageSettings", "resourcePage"]);

const FIXED_DOCUMENT_ACTIONS = new Set([
  "publish",
  "discardChanges",
  "restore",
]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,

  schema: {
    types: schema.types,

    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !FIXED_DOCUMENT_TYPES.has(schemaType),
      ),
  },

  document: {
    actions: (actions, context) =>
      FIXED_DOCUMENT_TYPES.has(context.schemaType)
        ? actions.filter(
            ({ action }) => action && FIXED_DOCUMENT_ACTIONS.has(action),
          )
        : actions,
  },

  plugins: [
    structureTool({ structure }),
    visionTool({
      defaultApiVersion: apiVersion,
    }),
  ],
});
