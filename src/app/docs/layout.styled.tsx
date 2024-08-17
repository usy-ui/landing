"use client";
import {
  usyColor,
  usyFontSize,
  usyFontWeight,
  usySpacing,
} from "@usy-ui/themes";
import Link from "next/link";
import styled, { css } from "styled-components";

export const DocsContainer = styled.section`
  display: flex;
  gap: ${usySpacing.px32};
`;

export const MenuHierarchyContainer = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled(Link)<{
  $isHighligh: boolean;
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

  ${({ $isHighligh, $isActivated }) =>
    $isHighligh &&
    !$isActivated &&
    css`
      margin-top: ${usySpacing.px28};
      font-weight: ${usyFontWeight.medium};
      color: ${usyColor.dark4};
    `}

  ${({ $isActivated }) =>
    $isActivated &&
    css`
      background-color: ${usyColor.primary};
      color: ${usyColor.white};
    `}

  &:hover {
    background-color: ${usyColor.primary};
    color: ${usyColor.white};
  }
`;
