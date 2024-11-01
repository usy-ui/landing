import { QuickNavItemType } from "@/components/docs/docs-layout/docs-layout.types";

export const QuickNavIntroMainItemConst: Record<
  "introduction" | "vision" | "keyFeatures",
  QuickNavItemType
> = {
  introduction: {
    name: "Introduction",
    sectionId: "introduction",
    order: 1,
  },
  vision: {
    name: "Vision",
    sectionId: "vision",
    order: 2,
  },
  keyFeatures: {
    name: "Key Features",
    order: 3,
  },
};

export const QuickNavIntroSubItemConst: Record<
  | "fastDevelopment"
  | "easeOfUse"
  | "customizationOptions"
  | "responsiveAccessible"
  | "modularDesign",
  QuickNavItemType
> = {
  fastDevelopment: {
    name: "Fast Development",
    sectionId: "fast-development",
    hasIndent: true,
    order: 1,
  },
  easeOfUse: {
    name: "Ease of Use",
    sectionId: "easy-of-use",
    hasIndent: true,
    order: 2,
  },
  customizationOptions: {
    name: "Customization Options",
    sectionId: "customization-options",
    hasIndent: true,
    order: 3,
  },
  responsiveAccessible: {
    name: "Responsive & Accessible",
    sectionId: "responsive-accessible",
    hasIndent: true,
    order: 4,
  },
  modularDesign: {
    name: "Modular Design",
    sectionId: "modular-design",
    hasIndent: true,
    order: 5,
  },
};
