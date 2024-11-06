import { QuickNavItemType } from "../docs-layout/docs-layout.types";

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
    sectionId: "types",
    hasIndent: true,
    order: 3,
  },
  sides: {
    name: "Sides",
    description:
      "Determine the position of an element by setting it to display on the left or right",
    sectionId: "sides",
    hasIndent: true,
    order: 4,
  },
  positions: {
    name: "Positions",
    description:
      "Control the placement of elements with properties for top, right, bottom, left and more",
    sectionId: "type",
    hasIndent: true,
    order: 5,
  },
  directions: {
    name: "Directions",
    description:
      "Control layout direction for both horizontal and vertical orientations",
    sectionId: "direction",
    hasIndent: true,
    order: 6,
  },
  sizes: {
    name: "Sizes",
    description: "Easily adjust component sizes to fit any design",
    sectionId: "size",
    hasIndent: true,
    order: 7,
  },
  colors: {
    name: "Colors",
    description: "Apply color schemes to identity and enhance visual appeal.",
    sectionId: "color",
    hasIndent: true,
    order: 8,
  },
  radius: {
    name: "Radius",
    description: "Customize border radius effortlessly to achieve either sharp",
    sectionId: "radius",
    hasIndent: true,
    order: 9,
  },
  icons: {
    name: "Icons",
    description:
      "Utilize a wide range of customizable icons to enhance clarity",
    sectionId: "icons",
    hasIndent: true,
    order: 10,
  },
  fallback: {
    name: "Fallback",
    description: "Maintain the styles even when primary resources fail",
    sectionId: "fallback",
    hasIndent: true,
    order: 11,
  },
  display: {
    name: "Display",
    description:
      "Create adaptable layouts, aligning and distributing space efficiently across items in a container",
    sectionId: "display",
    hasIndent: true,
    order: 12,
  },

  "justify-content": {
    name: "Justify Content",
    description:
      "Align and distribute items within a container along the main axis",
    sectionId: "justifyContent",
    hasIndent: true,
    order: 13,
  },
  "align-items": {
    name: "Align Items",
    description:
      "Control the alignment of items along the cross axis within a flex container",
    sectionId: "alignItems",
    hasIndent: true,
    order: 14,
  },
  "align-content": {
    name: "Align Content",
    description:
      "Manage the spacing and alignment of rows within a flex container, especially when there is extra space along the cross axis",
    sectionId: "alignContent",
    hasIndent: true,
    order: 15,
  },
  grow: {
    name: "Grow",
    description:
      "Adjust the proportion of space an item takes up within a flex container",
    sectionId: "grow",
    hasIndent: true,
    order: 16,
  },
  shrink: {
    name: "Shrink",
    description:
      "Control how an item reduces in size relative to others in a flex container when space is limited",
    sectionId: "shrink",
    hasIndent: true,
    order: 17,
  },
  wrap: {
    name: "Wrap",
    description:
      "Enable items to wrap onto multiple lines within a flex container",
    sectionId: "wrap",
    hasIndent: true,
    order: 18,
  },
  gap: {
    name: "Gap",
    description: "Set consistent spacing between items within a flex container",
    sectionId: "gap",
    hasIndent: true,
    order: 19,
  },
  "scroll-type": {
    name: "Scroll Type",
    description:
      "Define the scrolling behavior, choosing horizontal or vertical direction to gain user navigation experience",
    sectionId: "scroll-type",
    hasIndent: true,
    order: 20,
  },
  "show-scroll-on-hover": {
    name: "Show Scroll on Hover",
    description:
      "Display scrollbars only when hovering over the container, keeping the design clean",
    sectionId: "show-scroll-on-hover",
    hasIndent: true,
    order: 21,
  },
  form: {
    name: "Form",
    description:
      "Create dynamic, accessible forms with a full range of components",
    sectionId: "form",
    hasIndent: true,
    order: 22,
  },
};
