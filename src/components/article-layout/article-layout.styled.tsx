"use client";
import styled from "styled-components";
import { usyColor, usyFontSize, usyFontWeight, usySpacing } from "usy-ui";

export const ArticleLayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ArticleLayoutArticle = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ArticleLayoutTableOfContent = styled.aside`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: ${usySpacing.px28};
`;

export const QuickNavHeading = styled.h3`
  font-size: ${usyFontSize.small};
  font-weight: ${usyFontWeight.semibold};
  color: ${usyColor.dark5};
  margin-bottom: ${usySpacing.px24};
`;

export const ToCItem = styled.a`
  font-size: ${usyFontSize.small};
  color: ${usyColor.dark1};
  margin: ${usySpacing.px6} 0;
  cursor: pointer;
`;
