import { Button, usyColor, usyFontSize, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${usySpacing.px20};
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid ${usyColor.light2};
  border-radius: ${usySpacing.px4};
  margin-bottom: ${usySpacing.px32};
`;

export const IconsListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${usySpacing.px12};
  margin-bottom: 100px;
`;

export const GridLayoutButton = styled(Button)`
  font-size: ${usyFontSize.large};
`;

export const ListLayoutButton = styled(Button)`
  svg {
    width: 32px !important;
    height: 32px !important;
  }
`;
