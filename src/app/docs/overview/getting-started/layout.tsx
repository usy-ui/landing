import { FC, ReactNode, useMemo } from "react";

import { DocsLayout } from "@/components/docs/docs-layout";
import { QuickNavItemType } from "@/components/docs/docs-layout/types";

import {
  QuickNavGetStartMainItemConst,
  QuickNavGetStartSubItemConst,
} from "./constants";

type IntroLayoutProps = {
  children: ReactNode;
};

const GettingStartedLayout: FC<IntroLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        QuickNavGetStartMainItemConst.gettingStarted,
        QuickNavGetStartMainItemConst.installation,
        QuickNavGetStartSubItemConst.installLibrary,
        QuickNavGetStartSubItemConst.importCssFile,
      ] as QuickNavItemType[],
    []
  );

  return (
    <DocsLayout quickNavItems={docsQuickNavItemsMemo}>{children}</DocsLayout>
  );
};

export default GettingStartedLayout;
