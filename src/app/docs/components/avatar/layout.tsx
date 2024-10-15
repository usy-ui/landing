import { FC, ReactNode, useMemo } from "react";

import {
  CompQuickNavMainItemConst,
  CompQuickNavSubItemConst,
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
        CompQuickNavSubItemConst.size,
        CompQuickNavSubItemConst.radius,
        CompQuickNavSubItemConst.fallback,
      ] as QuickNavItemType[],
    []
  );

  return (
    <DocsLayout quickNavItems={docsQuickNavItemsMemo}>{children}</DocsLayout>
  );
};

export default AvatarLayout;
