"use client";
import styled, { css } from "styled-components";
import { usyColor, usyFontSize, usyFontWeight, usySpacing } from "usy-ui";

export const SpecificationLayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SpecificationLayoutArticle = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const SpecificationLayoutTableOfContent = styled.aside`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: ${usySpacing.px20};
  padding-left: ${usySpacing.px40};
`;

export const QuickNavHeading = styled.h3`
  font-size: ${usyFontSize.small};
  font-weight: ${usyFontWeight.semibold};
  color: ${usyColor.dark5};
  margin: 0 0 ${usySpacing.px24} 0;
`;

export const ToCItem = styled.a<{ $isClickable: boolean }>`
  font-size: ${usyFontSize.small};
  color: ${usyColor.dark1};
  margin: ${usySpacing.px8} 0;
  user-select: none;

  ${({ $isClickable }) =>
    $isClickable &&
    css`
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `}
`;

export const SubToCItem = styled(ToCItem)`
  margin-left: ${usySpacing.px16};
`;
