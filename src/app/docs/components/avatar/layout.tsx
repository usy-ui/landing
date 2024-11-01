import { FC, ReactNode, useMemo } from "react";

import {
  DocsQuickNavMainItemConst,
  DocsQuickNavSubItemConst,
} from "@/components/docs/docs-content/constants";
import { getSortedItemByOrder } from "@/components/docs/docs-content/utils";
import { DocsLayout } from "@/components/docs/docs-layout";
import { QuickNavItemType } from "@/components/docs/docs-layout/docs-layout.types";

type AvatarLayoutProps = {
  children: ReactNode;
};

const AvatarLayout: FC<AvatarLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(() => {
    return [
      ...getSortedItemByOrder([
        DocsQuickNavMainItemConst.overview,
        DocsQuickNavMainItemConst.apiReference,
        DocsQuickNavMainItemConst.examples,
      ]),
      ...getSortedItemByOrder([
        DocsQuickNavSubItemConst.sizes,
        DocsQuickNavSubItemConst.radius,
        DocsQuickNavSubItemConst.fallback,
      ]),
    ] as QuickNavItemType[];
  }, []);

  return (
    <DocsLayout quickNavItems={docsQuickNavItemsMemo}>{children}</DocsLayout>
  );
};

export default AvatarLayout;
