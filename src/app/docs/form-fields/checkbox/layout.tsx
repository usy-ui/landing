import { FC, ReactNode, useMemo } from "react";

import {
  DocsQuickNavMainItemConst,
  DocsQuickNavSubItemConst,
  getSortedItemByOrder,
} from "@/components/docs/docs-content/constants";
import { DocsLayout } from "@/components/docs/docs-layout";
import { QuickNavItemType } from "@/components/docs/docs-layout/types";

type CheckboxLayoutProps = {
  children: ReactNode;
};

const CheckboxLayout: FC<CheckboxLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        ...getSortedItemByOrder([
          DocsQuickNavMainItemConst.overview,
          DocsQuickNavMainItemConst.apiReference,
          DocsQuickNavMainItemConst.examples,
        ]),
        ...getSortedItemByOrder([DocsQuickNavSubItemConst.default]),
      ] as QuickNavItemType[],
    []
  );

  return (
    <DocsLayout quickNavItems={docsQuickNavItemsMemo}>{children}</DocsLayout>
  );
};

export default CheckboxLayout;
