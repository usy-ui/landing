import { FC, ReactNode, useMemo } from "react";

import { QuickNavItemType } from "@/@types/quick-nav";
import {
  DocsQuickNavMainItemConst,
  DocsQuickNavExampleItemConst,
} from "@/components/docs/docs.constants";
import { SpecLayout } from "@/components/docs/spec-layout";

type AvatarLayoutProps = {
  children: ReactNode;
};

const AvatarLayout: FC<AvatarLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        DocsQuickNavMainItemConst.overview,
        DocsQuickNavMainItemConst.apiReference,
        DocsQuickNavMainItemConst.examples,
        DocsQuickNavExampleItemConst.size,
        DocsQuickNavExampleItemConst.radius,
        DocsQuickNavExampleItemConst.fallback,
      ] as QuickNavItemType[],
    []
  );

  return (
    <SpecLayout quickNavItems={docsQuickNavItemsMemo}>{children}</SpecLayout>
  );
};

export default AvatarLayout;
