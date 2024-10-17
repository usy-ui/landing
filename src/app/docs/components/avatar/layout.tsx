import { FC, ReactNode, useMemo } from "react";

import {
  CompQuickNavMainItemConst,
  DocsQuickNavSubItemConst,
} from "@/components/docs/docs-content/constants";
import { DocsLayout } from "@/components/docs/docs-layout";
import { QuickNavItemType } from "@/components/docs/docs-layout/types";

type AvatarLayoutProps = {
  children: ReactNode;
};

const AvatarLayout: FC<AvatarLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        CompQuickNavMainItemConst.overview,
        CompQuickNavMainItemConst.apiReference,
        CompQuickNavMainItemConst.examples,
        DocsQuickNavSubItemConst.size,
        DocsQuickNavSubItemConst.radius,
        DocsQuickNavSubItemConst.fallback,
      ] as QuickNavItemType[],
    []
  );

  return (
    <DocsLayout quickNavItems={docsQuickNavItemsMemo}>{children}</DocsLayout>
  );
};

export default AvatarLayout;
