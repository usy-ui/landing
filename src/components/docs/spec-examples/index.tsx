"use client";
import { FC, ReactNode } from "react";

import { PanelTitle } from "usy-ui";

import { SpecExamplesContainer } from "./spec-examples.styled";

type SpecExamplesProps = {
  children: ReactNode;
};

export const SpecExamples: FC<SpecExamplesProps> = ({ children }) => {
  return (
    <SpecExamplesContainer>
      <PanelTitle title="Examples" size="extra-large" />
      {children}
    </SpecExamplesContainer>
  );
};
