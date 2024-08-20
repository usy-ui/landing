import { FC, ReactNode, useMemo } from "react";

import { ArticleLayout } from "@/components/article-layout";

type AvatarLayoutProps = {
  children: ReactNode;
};

const AvatarLayout: FC<AvatarLayoutProps> = ({ children }) => {
  const toCItems = useMemo(
    () => [
      {
        sectionId: "#api-reference",
        label: "API Reference",
      },
      {
        sectionId: "#radius",
        label: "Radius",
      },
    ],
    []
  );

  return <ArticleLayout toCItems={toCItems}>{children}</ArticleLayout>;
};

export default AvatarLayout;
