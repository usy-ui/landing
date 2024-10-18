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

export const getSortedItemByOrder = (items: QuickNavItemType[]) =>
  items.sort((a, b) => a.order - b.order);

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
    description: "The pure component with default props",
    sectionId: "default",
    hasIndent: true,
    order: 1,
  },
  variant: {
    name: "Variant",
    description: "Easily switch between styles and layouts",
    sectionId: "variant",
    hasIndent: true,
    order: 2,
  },
  size: {
    name: "Size",
    description: "Easily adjust component sizes to fit any design",
    sectionId: "size",
    hasIndent: true,
    order: 3,
  },
  color: {
    name: "Color",
    description: "Apply color schemes to identity and enhance visual appeal.",
    sectionId: "color",
    hasIndent: true,
    order: 4,
  },
  radius: {
    name: "Radius",
    description: "Customize border radius effortlessly to achieve either sharp",
    sectionId: "radius",
    hasIndent: true,
    order: 5,
  },
  fallback: {
    name: "Fallback",
    description: "Maintain the styles even when primary resources fail",
    sectionId: "fallback",
    hasIndent: true,
    order: 6,
  },
};
