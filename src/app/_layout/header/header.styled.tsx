"use client";
import {
  usyColor,
  usyElement,
  usyFontSize,
  usyFontWeight,
  usySpacing,
  usyZIndex,
} from "@usy-ui/base";
import Link from "next/link";
import styled, { css } from "styled-components";

import { MAX_WIDTH, HEADER_HEIGHT } from "@/constants/layout.constants";

export const HeaderContainer = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT};
  max-width: ${MAX_WIDTH};
  max-height: ${HEADER_HEIGHT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: ${usyZIndex[100]};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: ${usySpacing.px10} ${usySpacing.px20};
  backdrop-filter: blur(4px);
`;

export const LogoAndNavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchDocsAndLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${usySpacing.px14};

  a,
  a:visited {
    color: ${usyColor.dark8};
  }

  & > * {
    cursor: pointer;
  }
`;

export const NavItem = styled(Link)<{ $isActive: boolean }>`
  margin: 0 ${usySpacing.px12};
  font-size: ${usyFontSize.medium};

  cursor: pointer;

  ${({ $isActive }) => css`
    font-weight: ${$isActive ? usyFontWeight.semibold : usyFontWeight.normal};
    color: ${$isActive ? usyColor.dark4 : usyColor.dark1};
  `}
`;

export const SearchDocsInput = styled.div`
  width: 200px;
  height: ${usyElement.heightSmall};
  display: flex;
  align-items: center;
  color: ${usyColor.dark0};
  border: 1px solid ${usyColor.light3};
  border-radius: ${usySpacing.px10};
  font-size: ${usyFontSize.small};
  padding: 0 ${usySpacing.px10};
`;
