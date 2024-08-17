"use client";
import {
  usyColor,
  usyElement,
  usyFontSize,
  usyFontWeight,
  usySpacing,
} from "@usy-ui/themes";
import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${usySpacing.px10} ${usySpacing.px20};
`;

export const LogoAndNavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchDocsAndLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${usySpacing.px14};

  & > * {
    cursor: pointer;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: ${usySpacing.px32};
`;

export const NavItem = styled(Link)`
  margin: 0 ${usySpacing.px16};
  font-size: ${usyFontSize.small};
  font-weight: ${usyFontWeight.semibold};
  color: ${usyColor.dark1};
  cursor: pointer;
`;

export const SearchDocsInput = styled.div`
  width: 200px;
  height: ${usyElement.heightSmall};
  display: flex;
  align-items: center;
  color: ${usyColor.dark0};
  border: 1px solid ${usyColor.light3};
  border-radius: ${usySpacing.px10};
  font-size: 0.8rem;
  padding: 0 ${usySpacing.px10};
`;
