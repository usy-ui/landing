import { QuickNavItemType } from "@/@types/quick-nav";

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
    sectionId: "installation",
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
