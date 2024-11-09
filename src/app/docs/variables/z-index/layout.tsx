import { FC, ReactNode, useMemo } from "react";

import { DocsQuickNavMainItemConst } from "@/components/docs/docs-content/constants";
import { DocsLayout } from "@/components/docs/docs-layout";
import { QuickNavItemType } from "@/components/docs/docs-layout/docs-layout.types";

type CheckboxLayoutProps = {
  children: ReactNode;
};

const CheckboxLayout: FC<CheckboxLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () => [DocsQuickNavMainItemConst.overview] as QuickNavItemType[],
    []
  );

  return (
    <DocsLayout quickNavItems={docsQuickNavItemsMemo}>{children}</DocsLayout>
  );
};

export default CheckboxLayout;
