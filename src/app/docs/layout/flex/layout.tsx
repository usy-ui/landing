import { FC, ReactNode, useMemo } from "react";

import {
  DocsQuickNavMainItemConst,
  DocsQuickNavSubItemConst,
} from "@/components/docs/docs-content/constants";
import { getSortedItemByOrder } from "@/components/docs/docs-content/utils";
import { DocsLayout } from "@/components/docs/docs-layout";
import { QuickNavItemType } from "@/components/docs/docs-layout/types";

type FlexLayoutProps = {
  children: ReactNode;
};

const FlexLayout: FC<FlexLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        ...getSortedItemByOrder([
          DocsQuickNavMainItemConst.overview,
          DocsQuickNavMainItemConst.apiReference,
          DocsQuickNavMainItemConst.examples,
        ]),
        ...getSortedItemByOrder([
          DocsQuickNavSubItemConst.display,
          DocsQuickNavSubItemConst.directions,
          DocsQuickNavSubItemConst.justifyContent,
          DocsQuickNavSubItemConst.alignItems,
          DocsQuickNavSubItemConst.grow,
          DocsQuickNavSubItemConst.shrink,
          DocsQuickNavSubItemConst.wrap,
          DocsQuickNavSubItemConst.gap,
        ]),
      ] as QuickNavItemType[],
    []
  );

  return (
    <DocsLayout quickNavItems={docsQuickNavItemsMemo}>{children}</DocsLayout>
  );
};

export default FlexLayout;
