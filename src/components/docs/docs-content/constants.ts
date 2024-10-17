import { QuickNavItemType } from "../docs-layout/types";

import { CompQuickNavSubItemUnion, CompQuickNavMainItemUnion } from "./types";

export const CompQuickNavMainItemConst: Record<
  CompQuickNavMainItemUnion,
  QuickNavItemType
> = {
  overview: {
    name: "Overview",
    sectionId: "overview",
  },
  apiReference: {
    name: "API Reference",
    sectionId: "api-reference",
  },
  examples: {
    name: "Examples",
  },
};

export const DocsQuickNavSubItemConst: Record<
  CompQuickNavSubItemUnion,
  QuickNavItemType
> = {
  default: {
    name: "Default",
    description: "The pure component with default props",
    sectionId: "default",
    hasIndent: true,
  },
  variant: {
    name: "Variant",
    description: "Easily switch between styles and layouts",
    sectionId: "variant",
    hasIndent: true,
  },
  size: {
    name: "Size",
    description: "Easily adjust component sizes to fit any design",
    sectionId: "size",
    hasIndent: true,
  },
  color: {
    name: "Colors",
    description: "Apply color schemes to identity and enhance visual appeal.",
    sectionId: "color",
    hasIndent: true,
  },
  radius: {
    name: "Radius",
    description: "Customize border radius effortlessly to achieve either sharp",
    sectionId: "radius",
    hasIndent: true,
  },
  fallback: {
    name: "Fallback",
    description: "Maintain the styles even when primary resources fail",
    sectionId: "fallback",
    hasIndent: true,
  },
};
