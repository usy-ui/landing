import styled, { css } from "styled-components";
import { usyColor, usyFontSize, usyFontWeight, usySpacing } from "usy-ui";

export const SpecLayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SpecLayoutArticle = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const SpecLayoutTableOfContent = styled.aside`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${usySpacing.px20};
  padding-left: ${usySpacing.px40};
`;

export const QuickNavHeading = styled.h3`
  font-size: ${usyFontSize.medium};
  font-weight: ${usyFontWeight.semibold};
  color: ${usyColor.dark5};
  margin: 0 0 ${usySpacing.px24} 0;
`;

export const ToCItem = styled.button<{ $isHover: boolean }>`
  font-size: ${usyFontSize.medium};
  color: ${usyColor.dark1};
  background-color: transparent;
  border: none;
  outline: none;
  margin: ${usySpacing.px8} 0;
  user-select: none;

  ${({ $isHover }) =>
    $isHover &&
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
