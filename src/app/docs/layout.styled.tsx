"use client";

import { Scrollable, usyBreakpoint, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

import { HEADER_HEIGHT, MAIN_PADDING_TOP } from "@/constants/layout.constants";

export const DocsContainer = styled.div`
  display: flex;
  gap: ${usySpacing.px32};
`;

export const DocsHierarchyScrollable = styled(Scrollable)`
  width: 100%;
  max-width: 220px;
  max-height: calc(
    ${window ? window.innerHeight : 0} - ${HEADER_HEIGHT} - ${MAIN_PADDING_TOP} -
      40px
  );
  padding-bottom: ${usySpacing.px56};
  position: sticky;
  top: calc(${HEADER_HEIGHT} + ${MAIN_PADDING_TOP});

  @media only screen and (max-width: ${usyBreakpoint.laptop}) {
    display: none;
  }
`;
