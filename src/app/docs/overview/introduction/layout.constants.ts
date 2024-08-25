import { QuickNavItemType } from "@/@types/quick-nav";

export const QuickNavIntroMainItemConst: Record<
  "introduction" | "vision" | "keyFeatures",
  QuickNavItemType
> = {
  introduction: {
    name: "Introduction",
    sectionId: "#introduction",
  },
  vision: {
    name: "Vision",
    sectionId: "#vision",
  },
  keyFeatures: {
    name: "Key Features",
  },
};

export const QuickNavIntroSubItemConst: Record<
  "customStyles",
  QuickNavItemType
> = {
  customStyles: {
    name: "Custom Styles",
    sectionId: "#custom-styles",
    hasIndent: true,
  },
};
