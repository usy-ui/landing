import { FC, ReactNode, useMemo } from "react";

import {
  DocsQuickNavMainItemConst,
  DocsQuickNavSubItemConst,
} from "@/components/docs/docs-content/constants";
import { getSortedItemByOrder } from "@/components/docs/docs-content/utils";
import { DocsLayout } from "@/components/docs/docs-layout";
import { QuickNavItemType } from "@/components/docs/docs-layout/docs-layout.types";

type AccordionLayoutProps = {
  children: ReactNode;
};

const AvatarLayout: FC<AccordionLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        ...getSortedItemByOrder([
          DocsQuickNavMainItemConst.overview,
          DocsQuickNavMainItemConst.apiReference,
          DocsQuickNavMainItemConst.examples,
        ]),
        DocsQuickNavSubItemConst.default,
      ] as QuickNavItemType[],
    []
  );

  return (
    <DocsLayout quickNavItems={docsQuickNavItemsMemo}>{children}</DocsLayout>
  );
};

export default AvatarLayout;
