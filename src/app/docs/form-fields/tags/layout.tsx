import { FC, ReactNode, useMemo } from "react";

import {
  DocsQuickNavMainItemConst,
  DocsQuickNavSubItemConst,
} from "@/components/docs/docs-content/constants";
import { getSortedItemByOrder } from "@/components/docs/docs-content/utils";
import { DocsLayout } from "@/components/docs/docs-layout";
import { QuickNavItemType } from "@/components/docs/docs-layout/docs-layout.types";

type TagsLayoutProps = {
  children: ReactNode;
};

const TagsLayout: FC<TagsLayoutProps> = ({ children }) => {
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
          DocsQuickNavSubItemConst.form,
        ]),
      ] as QuickNavItemType[],
    []
  );

  return (
    <DocsLayout quickNavItems={docsQuickNavItemsMemo}>{children}</DocsLayout>
  );
};

export default TagsLayout;
