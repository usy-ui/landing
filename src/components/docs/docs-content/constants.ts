import { QuickNavItemType } from "../docs-layout/types";

import { DocsQuickNavSubItemUnion, DocsQuickNavMainItemUnion } from "./types";

type DocsQuickNavMainItemType = Record<
  DocsQuickNavMainItemUnion,
  QuickNavItemType
>;

type DocsQuickNavSubItemType = Record<
  DocsQuickNavSubItemUnion,
  QuickNavItemType
>;

export const DocsQuickNavMainItemConst: DocsQuickNavMainItemType = {
  overview: {
    name: "Overview",
    sectionId: "overview",
    order: 1,
  },
  apiReference: {
    name: "API Reference",
    sectionId: "api-reference",
    order: 2,
  },
  examples: {
    name: "Examples",
    order: 3,
  },
};

export const DocsQuickNavSubItemConst: DocsQuickNavSubItemType = {
  default: {
    name: "Default",
    description: "Common cases with default props",
    sectionId: "default",
    hasIndent: true,
    order: 1,
  },
  variants: {
    name: "Variants",
    description: "Easily switch between styles and layouts",
    sectionId: "variant",
    hasIndent: true,
    order: 2,
  },
  types: {
    name: "Types",
    description: "Define action behaviors based on requirements",
    sectionId: "type",
    hasIndent: true,
    order: 3,
  },
  directions: {
    name: "Directions",
    description:
      "Control layout direction for both horizontal and vertical orientations",
    sectionId: "direction",
    hasIndent: true,
    order: 4,
  },
  sizes: {
    name: "Sizes",
    description: "Easily adjust component sizes to fit any design",
    sectionId: "size",
    hasIndent: true,
    order: 5,
  },
  colors: {
    name: "Colors",
    description: "Apply color schemes to identity and enhance visual appeal.",
    sectionId: "color",
    hasIndent: true,
    order: 6,
  },
  radius: {
    name: "Radius",
    description: "Customize border radius effortlessly to achieve either sharp",
    sectionId: "radius",
    hasIndent: true,
    order: 7,
  },
  icons: {
    name: "Icons",
    description:
      "Utilize a wide range of customizable icons to enhance clarity",
    sectionId: "icons",
    hasIndent: true,
    order: 8,
  },
  fallback: {
    name: "Fallback",
    description: "Maintain the styles even when primary resources fail",
    sectionId: "fallback",
    hasIndent: true,
    order: 9,
  },
  form: {
    name: "Form",
    description:
      "Create dynamic, accessible forms with a full range of components",
    sectionId: "form",
    hasIndent: true,
    order: 10,
  },
};
