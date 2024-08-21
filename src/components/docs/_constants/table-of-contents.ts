export type ToCItemType = {
  id: string;
  label: string;
  sectionId?: string;
  hasIndent?: boolean;
};

export const MainToCItem: Record<
  "overview" | "apiReference" | "examples",
  ToCItemType
> = {
  overview: {
    id: "overview",
    sectionId: "#overview",
    label: "Overview",
  },
  apiReference: {
    id: "api-reference",
    sectionId: "#api-reference",
    label: "API Reference",
  },
  examples: {
    id: "examples",
    label: "Examples",
  },
};

export const SubToCItem: Record<
  "variant" | "size" | "color" | "radius" | "fallback",
  ToCItemType
> = {
  variant: {
    id: "variant",
    label: "Variant",
    sectionId: "#variant",
    hasIndent: true,
  },
  size: {
    id: "size",
    label: "Size",
    sectionId: "#size",
    hasIndent: true,
  },
  color: {
    id: "color",
    sectionId: "#color",
    label: "Colors",
    hasIndent: true,
  },
  radius: {
    id: "radius",
    sectionId: "#radius",
    label: "Radius",
    hasIndent: true,
  },
  fallback: {
    id: "fallback",
    sectionId: "#fallback",
    label: "Fallback",
    hasIndent: true,
  },
};
