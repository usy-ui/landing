"use client";
import { FC, ReactNode } from "react";

import {
  ContentContainer,
  ContentAndQuickContainer,
  QuickNavContainer,
  QuickNavHeading,
  QuickNavMainItemStyled,
  QuickNavSubItemStyled,
} from "./styled";
import { QuickNavItemType } from "./types";

type DocsLayoutProps = {
  children: ReactNode;
  quickNavItems?: QuickNavItemType[];
};

export const DocsLayout: FC<DocsLayoutProps> = ({
  children,
  quickNavItems,
}) => {
  const renderQuickNavItem = () => {
    if (!quickNavItems || quickNavItems?.length === 0) {
      return null;
    }

    return quickNavItems.map((item) => {
      const RenderQuickNavItemStyled = item.hasIndent
        ? QuickNavSubItemStyled
        : QuickNavMainItemStyled;

      const scrollIntoView = () => {
        if (!document || !item.sectionId) {
          return;
        }

        document
          .getElementById(item.sectionId)
          ?.scrollIntoView({ block: "center" });
      };

      return (
        <RenderQuickNavItemStyled
          key={item.name}
          onClick={scrollIntoView}
          $isHover={Boolean(item.sectionId)}
        >
          {item.name}
        </RenderQuickNavItemStyled>
      );
    });
  };

  return (
    <ContentAndQuickContainer>
      <ContentContainer>{children}</ContentContainer>
      <QuickNavContainer>
        <QuickNavHeading>Quick nav</QuickNavHeading>
        {renderQuickNavItem()}
      </QuickNavContainer>
    </ContentAndQuickContainer>
  );
};
