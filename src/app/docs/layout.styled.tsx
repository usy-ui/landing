"use client";
import Link from "next/link";
import styled, { css } from "styled-components";
import {
  Scrollable,
  usyColor,
  usyFontSize,
  usyFontWeight,
  usySpacing,
} from "usy-ui";

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
  max-width: 260px;
  max-height: calc(100vh - ${HEADER_HEIGHT} - ${MAIN_PADDING_TOP} - 40px);
`;

export const MenuHierarchyContainer = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const MenuHeading = styled.h2`
  color: ${usyColor.dark4};
  font-size: ${usyFontSize.small};
  font-weight: ${usyFontWeight.semibold};
  padding: ${usySpacing.px4} ${usySpacing.px12};
  margin: ${usySpacing.px28} 0 0;
`;

export const MenuItem = styled(Link)<{
  $isActivated: boolean;
}>`
  width: 160px;
  padding: ${usySpacing.px4} ${usySpacing.px12};
  margin: ${usySpacing.px4} 0;
  font-weight: ${usyFontWeight.light};
  font-size: ${usyFontSize.small};
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
