import { FC, ReactNode } from "react";

import {
  ArticleLayoutArticle,
  ArticleLayoutContainer,
  ArticleLayoutTableOfContent,
  QuickNavHeading,
  ToCItem,
} from "./article-layout.styled";

type ToCItems = {
  sectionId: string;
  label: string;
};

type ArticleLayoutProps = {
  children: ReactNode;
  toCItems?: ToCItems[];
};

export const ArticleLayout: FC<ArticleLayoutProps> = ({
  children,
  toCItems,
}) => {
  return (
    <ArticleLayoutContainer>
      <ArticleLayoutArticle>{children}</ArticleLayoutArticle>
      {toCItems && toCItems?.length > 0 && (
        <ArticleLayoutTableOfContent>
          <QuickNavHeading>Quick nav</QuickNavHeading>
          {toCItems.map((item) => (
            <ToCItem key={item.sectionId}>{item.label}</ToCItem>
          ))}
        </ArticleLayoutTableOfContent>
      )}
    </ArticleLayoutContainer>
  );
};
