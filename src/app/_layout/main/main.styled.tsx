"use client";
import styled from "styled-components";
import { usySpacing } from "usy-ui";

import {
  MAIN_PADDING_TOP,
  MAX_WIDTH,
  HEADER_HEIGHT,
} from "@/constants/layout.constants";

export const MainContainer = styled.main`
  width: 100%;
  max-width: ${MAX_WIDTH};
  min-height: calc(100vh - ${HEADER_HEIGHT});
  padding: ${MAIN_PADDING_TOP} ${usySpacing.px20} 0;
  margin: ${HEADER_HEIGHT} auto 0;
`;
