import { QuickNavItemType } from "@/components/docs/docs-layout/types";

export const QuickNavIntroMainItemConst: Record<
  "introduction" | "vision" | "keyFeatures",
  QuickNavItemType
> = {
  introduction: {
    name: "Introduction",
    sectionId: "introduction",
  },
  vision: {
    name: "Vision",
    sectionId: "vision",
  },
  keyFeatures: {
    name: "Key Features",
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
  },
  easeOfUse: {
    name: "Ease of Use",
    sectionId: "easy-of-use",
    hasIndent: true,
  },
  customizationOptions: {
    name: "Customization Options",
    sectionId: "customization-options",
    hasIndent: true,
  },
  responsiveAccessible: {
    name: "Responsive & Accessible",
    sectionId: "responsive-accessible",
    hasIndent: true,
  },
  modularDesign: {
    name: "Modular Design",
    sectionId: "modular-design",
    hasIndent: true,
  },
};
