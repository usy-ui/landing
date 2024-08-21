import { FC, ReactNode } from "react";

import { ToCItemType } from "../_constants/table-of-contents";

import {
  SpecificationLayoutArticle,
  SpecificationLayoutContainer,
  SpecificationLayoutTableOfContent,
  QuickNavHeading,
  SubToCItem,
  ToCItem,
} from "./specification-layout.styled";

type SpecificationLayoutProps = {
  children: ReactNode;
  toCItems?: ToCItemType[];
};

export const SpecificationLayout: FC<SpecificationLayoutProps> = ({
  children,
  toCItems,
}) => {
  const renderTableOfContent = () => {
    if (!toCItems || toCItems?.length === 0) {
      return null;
    }

    return (
      <SpecificationLayoutTableOfContent>
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
      </SpecificationLayoutTableOfContent>
    );
  };

  return (
    <SpecificationLayoutContainer>
      <SpecificationLayoutArticle>{children}</SpecificationLayoutArticle>
      {renderTableOfContent()}
    </SpecificationLayoutContainer>
  );
};
