import styled, { css } from "styled-components";
import { usyColor, usyFontSize, usyFontWeight, usySpacing } from "usy-ui";

import { HEADER_HEIGHT, MAIN_PADDING_TOP } from "@/constants/layout.constants";

export const SpecLayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SpecLayoutDoc = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 200px;
`;

export const SpecLayoutQuickNav = styled.aside`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${usySpacing.px20};
  padding-left: ${usySpacing.px40};
  position: sticky;
  top: calc(${HEADER_HEIGHT} + ${MAIN_PADDING_TOP});
`;

export const QuickNavHeading = styled.h3`
  font-size: ${usyFontSize.medium};
  font-weight: ${usyFontWeight.semibold};
  color: ${usyColor.dark5};
  margin: 0 0 ${usySpacing.px24} 0;
`;

export const QuickNavMainItemStyled = styled.button<{ $isHover: boolean }>`
  font-size: ${usyFontSize.medium};
  font-weight: ${usyFontWeight.semibold};
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

export const QuickNavSubItemStyled = styled(QuickNavMainItemStyled)`
  font-weight: unset;
  margin-left: ${usySpacing.px16};
`;
