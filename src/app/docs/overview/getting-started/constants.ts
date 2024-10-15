import { QuickNavItemType } from "@/components/docs/docs-layout/types";

export const QuickNavGetStartMainItemConst: Record<
  "gettingStarted" | "installation",
  QuickNavItemType
> = {
  gettingStarted: {
    name: "Getting Started",
    sectionId: "gettingStarted",
  },
  installation: {
    name: "Installation",
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
  },
  importCssFile: {
    name: "Import CSS file",
    sectionId: "import-css-file",
    hasIndent: true,
  },
};
