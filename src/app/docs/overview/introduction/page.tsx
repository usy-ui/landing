"use client";
import { Box, PanelTitle, Typography, usySpacing } from "usy-ui";

import {
  QUICK_NAV_MAIN_TO_MAIN_SPACING,
  QUICK_NAV_MAIN_TO_SUB_SPACING,
} from "@/constants/layout.constants";

const Introduction = () => {
  /**
   * Render
   */

  const renderIntroduction = () => {
    return (
      <Box>
        <PanelTitle
          title="Introduction"
          description="An open-source UI component library for building high-quality, accessible design systems and web apps."
          size="gigant-1"
          marginProps={{ marginBottom: usySpacing.px20 }}
        />
        <Typography>
          Usy-UI is a low-level UI component library with a focus on
          accessibility, customization and developer experience. You can use
          these components either as the base layer of your design system, or
          adopt them incrementally.
        </Typography>
      </Box>
    );
  };

  const renderVision = () => {
    return (
      <Box marginProps={{ marginTop: QUICK_NAV_MAIN_TO_MAIN_SPACING }}>
        <PanelTitle
          title="Vision"
          size="huge"
          marginProps={{ marginBottom: usySpacing.px16 }}
        />
        <Typography>
          Most of us share similar definitions for common UI patterns like
          accordion, checkbox, combobox, dialog, dropdown, select, slider, and
          tooltip. These UI patterns are documented by WAI-ARIA and generally
          understood by the community.
        </Typography>
      </Box>
    );
  };

  const renderKeyFeatures = () => {
    return (
      <Box marginProps={{ marginTop: QUICK_NAV_MAIN_TO_MAIN_SPACING }}>
        <PanelTitle
          title="Key Features"
          size="huge"
          marginProps={{ marginBottom: "0" }}
        />
      </Box>
    );
  };

  const renderCustomFeatures = () => {
    return (
      <Box marginProps={{ marginTop: QUICK_NAV_MAIN_TO_SUB_SPACING }}>
        <PanelTitle title="Custom Styles" size="large" />
      </Box>
    );
  };

  return (
    <>
      {renderIntroduction()}
      {renderVision()}
      {renderKeyFeatures()}
      {renderCustomFeatures()}
    </>
  );
};

export default Introduction;
