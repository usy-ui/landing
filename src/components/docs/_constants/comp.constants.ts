import { QuickNavItemType } from "@/@types/quick-nav";

import {
  DocsQuickNavMainItemUnion,
  DocsQuickNavExampleItemUnion,
} from "../docs.types";

export const QuickNavCompMainItemConst: Record<
  DocsQuickNavMainItemUnion,
  QuickNavItemType
> = {
  overview: {
    name: "Overview",
    sectionId: "#overview",
  },
  apiReference: {
    name: "API Reference",
    sectionId: "#api-reference",
  },
  examples: {
    name: "Examples",
  },
};

export const QuickNavCompExampleItemConst: Record<
  DocsQuickNavExampleItemUnion,
  QuickNavItemType
> = {
  default: {
    name: "Default",
    sectionId: "default",
    hasIndent: true,
  },
  variant: {
    name: "Variant",
    sectionId: "variant",
    hasIndent: true,
  },
  size: {
    name: "Size",
    sectionId: "size",
    hasIndent: true,
  },
  color: {
    name: "Colors",
    sectionId: "color",
    hasIndent: true,
  },
  radius: {
    name: "Radius",
    sectionId: "radius",
    hasIndent: true,
  },
  fallback: {
    name: "Fallback",
    sectionId: "fallback",
    hasIndent: true,
  },
};
