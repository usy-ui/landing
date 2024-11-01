import { QuickNavItemType } from "@/components/docs/docs-layout/docs-layout.types";

export const QuickNavGetStartMainItemConst: Record<
  "gettingStarted" | "installation",
  QuickNavItemType
> = {
  gettingStarted: {
    name: "Getting Started",
    sectionId: "gettingStarted",
    order: 1,
  },
  installation: {
    name: "Installation",
    order: 2,
  },
};

export const QuickNavGetStartSubItemConst: Record<
  "installLibrary" | "importCssFile",
  QuickNavItemType
> = {
  installLibrary: {
    name: "Install Library",
    sectionId: "install-library",
    hasIndent: true,
    order: 1,
  },
  importCssFile: {
    name: "Import CSS file",
    sectionId: "import-css-file",
    hasIndent: true,
    order: 2,
  },
};
