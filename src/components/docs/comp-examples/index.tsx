"use client";

import { FC, ReactNode } from "react";

import { Box, PanelTitle } from "usy-ui";

import { QUICK_NAV_MAIN_TO_MAIN_SPACING } from "@/constants/layout.constants";

type CompExamplesProps = {
  children: ReactNode;
};

export const CompExamples: FC<CompExamplesProps> = ({ children }) => {
  return (
    <Box marginProps={{ marginTop: QUICK_NAV_MAIN_TO_MAIN_SPACING }}>
      <PanelTitle title="Examples" size="huge" />
      {children}
    </Box>
  );
};
