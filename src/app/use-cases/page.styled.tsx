"use client";
import { Flex, usyBreakpoints, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const TwoThirdColumnsFlex = styled(Flex)`
  max-width: calc(66.66% - 32px);
  width: 100%;

  @media only screen and (max-width: ${usyBreakpoints.desktop}) {
    max-width: 100%;
  }
`;

export const CreAccBlogFaqFlex = styled(Flex)`
  flex-wrap: wrap;
  gap: ${usySpacing.px32};
  margin-top: ${usySpacing.px32};

  & > div {
    width: calc(50% - ${usySpacing.px16});
  }

  @media only screen and (max-width: ${usyBreakpoints.laptop}) {
    & > div {
      width: 100%;
    }
  }
`;

export const OneThirdColumnFlex = styled(Flex)`
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 33.33%;
  width: 100%;

  @media only screen and (max-width: ${usyBreakpoints.desktop}) {
    max-width: 100%;
    flex-direction: row;

    & > div {
      width: calc(50% - ${usySpacing.px16});

      &:nth-child(1) {
        order: 3;
      }

      &:nth-child(2) {
        order: 1;
      }
    }
  }

  @media only screen and (max-width: ${usyBreakpoints.laptop}) {
    & > div {
      width: 100%;
    }
  }
`;
