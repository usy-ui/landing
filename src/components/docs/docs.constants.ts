export type ToCItemType = {
  name: string;
  sectionId?: string;
  hasIndent?: boolean;
};

export type MainToCItemType = "overview" | "apiReference" | "examples";
export const MainToCItem: Record<MainToCItemType, ToCItemType> = {
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

export type SubToCItemType =
  | "variant"
  | "size"
  | "color"
  | "radius"
  | "fallback";
export const SubToCItem: Record<SubToCItemType, ToCItemType> = {
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
