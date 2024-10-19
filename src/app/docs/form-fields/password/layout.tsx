import { FC, ReactNode, useMemo } from "react";

import {
  DocsQuickNavMainItemConst,
  DocsQuickNavSubItemConst,
  getSortedItemByOrder,
} from "@/components/docs/docs-content/constants";
import { DocsLayout } from "@/components/docs/docs-layout";
import { QuickNavItemType } from "@/components/docs/docs-layout/types";

type PasswordLayoutProps = {
  children: ReactNode;
};

const PasswordLayout: FC<PasswordLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        ...getSortedItemByOrder([
          DocsQuickNavMainItemConst.overview,
          DocsQuickNavMainItemConst.apiReference,
          DocsQuickNavMainItemConst.examples,
        ]),
        ...getSortedItemByOrder([
          DocsQuickNavSubItemConst.default,
          DocsQuickNavSubItemConst.size,
          DocsQuickNavSubItemConst.icon,
          DocsQuickNavSubItemConst.form,
        ]),
      ] as QuickNavItemType[],
    []
  );

  return (
    <DocsLayout quickNavItems={docsQuickNavItemsMemo}>{children}</DocsLayout>
  );
};

export default PasswordLayout;
