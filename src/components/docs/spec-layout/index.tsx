import { FC, ReactNode } from "react";

import { ToCItemType } from "../_constants/table-of-contents";

import {
  SpecLayoutArticle,
  SpecLayoutContainer,
  SpecLayoutTableOfContent,
  QuickNavHeading,
  SubToCItem,
  ToCItem,
} from "./spec-layout.styled";

type SpecLayoutProps = {
  children: ReactNode;
  toCItems?: ToCItemType[];
};

export const SpecLayout: FC<SpecLayoutProps> = ({ children, toCItems }) => {
  const renderTableOfContent = () => {
    if (!toCItems || toCItems?.length === 0) {
      return null;
    }

    return (
      <SpecLayoutTableOfContent>
        <QuickNavHeading>Quick nav</QuickNavHeading>
        {toCItems.map((item) => {
          const RenderToCItem = item.hasIndent ? SubToCItem : ToCItem;

          return (
            <RenderToCItem
              key={item.id}
              href={item.sectionId}
              $isClickable={Boolean(item.sectionId)}
              target="_self"
            >
              {item.label}
            </RenderToCItem>
          );
        })}
      </SpecLayoutTableOfContent>
    );
  };

  return (
    <SpecLayoutContainer>
      <SpecLayoutArticle>{children}</SpecLayoutArticle>
      {renderTableOfContent()}
    </SpecLayoutContainer>
  );
};
