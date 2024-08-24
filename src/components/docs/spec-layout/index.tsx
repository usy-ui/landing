"use client";
import { FC, ReactNode } from "react";

import { ToCItemType } from "../docs.constants";

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
          const scrollIntoView = () => {
            if (!document || !item.sectionId) {
              return;
            }

            document
              .getElementById(item.sectionId)
              ?.scrollIntoView({ block: "center" });
          };

          return (
            <RenderToCItem
              key={item.name}
              onClick={scrollIntoView}
              $isHover={Boolean(item.sectionId)}
            >
              {item.name}
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
