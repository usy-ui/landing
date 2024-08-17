"use client";
import styled from "styled-components";

import { MAX_WIDTH } from "@/constants/layout.constants";

export const StyledAppContainer = styled.main`
  width: 100%;
  max-width: ${MAX_WIDTH};
  min-height: 100vh;
  margin: auto;
`;
