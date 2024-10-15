import { FC, ReactNode, useMemo } from "react";

import { DocsLayout } from "@/components/docs/docs-layout";
import { QuickNavItemType } from "@/components/docs/docs-layout/types";

import {
  QuickNavIntroMainItemConst,
  QuickNavIntroSubItemConst,
} from "./layout.constants";

type IntroLayoutProps = {
  children: ReactNode;
};

const IntroLayout: FC<IntroLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        QuickNavIntroMainItemConst.introduction,
        QuickNavIntroMainItemConst.vision,
        QuickNavIntroMainItemConst.keyFeatures,
        QuickNavIntroSubItemConst.fastDevelopment,
        QuickNavIntroSubItemConst.easeOfUse,
        QuickNavIntroSubItemConst.customizationOptions,
        QuickNavIntroSubItemConst.responsiveAccessible,
        QuickNavIntroSubItemConst.modularDesign,
      ] as QuickNavItemType[],
    []
  );

  return (
    <DocsLayout quickNavItems={docsQuickNavItemsMemo}>{children}</DocsLayout>
  );
};

export default IntroLayout;
