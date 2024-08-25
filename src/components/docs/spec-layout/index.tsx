"use client";
import { FC, ReactNode } from "react";

import { QuickNavItemType } from "@/@types/quick-nav";

import {
  SpecLayoutDoc,
  SpecLayoutContainer,
  SpecLayoutQuickNav,
  QuickNavHeading,
  QuickNavMainItemStyled,
  QuickNavSubItemStyled,
} from "./spec-layout.styled";

type SpecLayoutProps = {
  children: ReactNode;
  quickNavItems?: QuickNavItemType[];
};

export const SpecLayout: FC<SpecLayoutProps> = ({
  children,
  quickNavItems,
}) => {
  const renderTableOfContent = () => {
    if (!quickNavItems || quickNavItems?.length === 0) {
      return null;
    }

    return (
      <SpecLayoutQuickNav>
        <QuickNavHeading>Quick nav</QuickNavHeading>
        {quickNavItems.map((item) => {
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
        })}
      </SpecLayoutQuickNav>
    );
  };

  return (
    <SpecLayoutContainer>
      <SpecLayoutDoc>{children}</SpecLayoutDoc>
      {renderTableOfContent()}
    </SpecLayoutContainer>
  );
};
