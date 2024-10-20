"use client";
import {
  Scrollable,
  usyColor,
  usyFontSize,
  usyFontWeight,
  usySpacing,
} from "@usy-ui/base";
import Link from "next/link";
import styled, { css } from "styled-components";

import { HEADER_HEIGHT, MAIN_PADDING_TOP } from "@/constants/layout.constants";

export const DocsContainer = styled.div`
  display: flex;
  gap: ${usySpacing.px32};
`;

/**
 * Menu
 */

export const MenuScrollableContainer = styled(Scrollable)`
  width: 100%;
  max-width: 220px;
  max-height: calc(100vh - ${HEADER_HEIGHT} - ${MAIN_PADDING_TOP} - 40px);
  padding-bottom: ${usySpacing.px56};
  position: sticky;
  top: calc(${HEADER_HEIGHT} + ${MAIN_PADDING_TOP});
`;

export const MenuHierarchyContainer = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const MenuHeading = styled.h3`
  color: ${usyColor.dark4};
  font-size: ${usyFontSize.medium};
  font-weight: ${usyFontWeight.semibold};
  padding: 0 ${usySpacing.px12} ${usySpacing.px8} ${usySpacing.px12};
  margin: ${usySpacing.px20} 0 0;
`;

export const MenuItemLink = styled(Link)<{
  $isActivated: boolean;
}>`
  width: 170px;
  padding: ${usySpacing.px4} ${usySpacing.px12};
  margin: ${usySpacing.px4} 0;
  font-weight: ${usyFontWeight.light};
  font-size: ${usyFontSize.medium};
  color: ${usyColor.dark1};
  border-top-left-radius: ${usySpacing.px2};
  border-bottom-left-radius: ${usySpacing.px2};
  border-top-right-radius: ${usySpacing.px10};
  border-bottom-right-radius: ${usySpacing.px10};

  ${({ $isActivated }) =>
    $isActivated &&
    css`
      font-weight: ${usyFontWeight.semibold};
      text-decoration: none !important;
      color: ${usyColor.primary};
    `}

  &:hover {
    text-decoration: underline;
  }
`;
