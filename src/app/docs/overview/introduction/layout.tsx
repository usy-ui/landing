import { FC, ReactNode, useMemo } from "react";

import { QuickNavItemType } from "@/@types/quick-nav";
import { SpecLayout } from "@/components/docs/spec-layout";

import {
  QuickNavIntroMainItemConst,
  QuickNavIntroSubItemConst,
} from "./layout.constants";

type IntroLayoutProps = {
  children: ReactNode;
};

const AvatarLayout: FC<IntroLayoutProps> = ({ children }) => {
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
    <SpecLayout quickNavItems={docsQuickNavItemsMemo}>{children}</SpecLayout>
  );
};

export default AvatarLayout;
