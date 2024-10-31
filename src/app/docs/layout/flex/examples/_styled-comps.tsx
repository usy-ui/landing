"use client";
import {
  Box,
  Flex,
  usyColor,
  usyElement,
  usyFontSize,
  usySpacing,
} from "@usy-ui/base";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  background-color: ${usyColor.blue4};
  border-radius: ${usySpacing.px4};
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
  color: ${usyColor.white};
  font-size: ${usyFontSize.small};
`;

export const StyledFlex = styled(Flex)`
  border: 1px dashed ${usyElement.borderColor};
  padding: ${usySpacing.px20};
  border-radius: ${usySpacing.px4};
`;
