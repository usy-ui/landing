import { FC, ReactNode, useMemo } from "react";

import { QuickNavItemType } from "@/@types/quick-nav";
import { SpecLayout } from "@/components/docs/spec-layout";

import {
  QuickNavGetStartMainItemConst,
  QuickNavGetStartSubItemConst,
} from "./getting-started.constants";

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
    <SpecLayout quickNavItems={docsQuickNavItemsMemo}>{children}</SpecLayout>
  );
};

export default GettingStartedLayout;
