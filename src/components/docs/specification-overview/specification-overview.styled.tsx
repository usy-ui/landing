import styled from "styled-components";
import { usyColor, usyFontSize, usySpacing } from "usy-ui";

export const Link = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${usyFontSize.small};
  background-color: ${usyColor.light0};
  padding: ${usySpacing.px2} ${usySpacing.px10};
  border-radius: ${usySpacing.px4};
  cursor: pointer;

  &:visited {
    color: ${usyColor.dark9};
  }

  svg {
    margin-left: ${usySpacing.px8};
  }

  &:hover {
    text-decoration: underline;
  }
`;
