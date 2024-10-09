"use client";

import { FC, ReactNode } from "react";

import { Box, ParagraphHeading } from "@usy-ui/base";

import { QUICK_NAV_MAIN_TO_MAIN_SPACING } from "@/constants/layout.constants";

type CompExamplesSectionProps = {
  children: ReactNode;
};

export { CompExample } from "./example";
export const CompExamplesSection: FC<CompExamplesSectionProps> = ({
  children,
}) => {
  return (
    <Box marginProps={{ marginTop: QUICK_NAV_MAIN_TO_MAIN_SPACING }}>
      <ParagraphHeading title="Examples" titleSize="huge" />
      {children}
    </Box>
  );
};
