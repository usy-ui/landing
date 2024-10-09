"use client";
import { Box, ParagraphHeading, Typography, usySpacing } from "@usy-ui/base";

import {
  QUICK_NAV_MAIN_TO_MAIN_SPACING,
  QUICK_NAV_MAIN_TO_SUB_SPACING,
} from "@/constants/layout.constants";

import {
  QuickNavIntroMainItemConst,
  QuickNavIntroSubItemConst,
} from "./layout.constants";

const Introduction = () => {
  /**
   * Render
   */

  const renderIntroduction = () => {
    return (
      <Box id={QuickNavIntroMainItemConst.introduction.sectionId}>
        <ParagraphHeading
          title="Introduction"
          description="An open source component library optimized, lightweight for quick startup"
          titleSize="gigant-1"
          marginProps={{ marginBottom: usySpacing.px20 }}
        />
        <Typography>
          Usy-UI is a modern, lightweight component library designed for fast
          and efficient web development. With an intuitive API, developers can
          quickly build responsive and accessible UIs without sacrificing
          flexibility. Usy-UI offers a wide range of pre-built components that
          are easy to integrate and customize, ensuring that each project can
          maintain its unique design and branding.
        </Typography>
        <Typography>
          Whether you are building a simple app or a complex user interface,
          Usy-UI empowers you to do it with speed and confidence.
        </Typography>
      </Box>
    );
  };

  const renderVision = () => {
    return (
      <Box
        id={QuickNavIntroMainItemConst.vision.sectionId}
        marginProps={{ marginTop: QUICK_NAV_MAIN_TO_MAIN_SPACING }}
      >
        <ParagraphHeading
          title="Vision"
          titleSize="huge"
          marginProps={{ marginBottom: usySpacing.px16 }}
        />
        <Typography>
          At Usy-UI, our vision is to empower developers to build intuitive,
          elegant, and high-performing user interfaces with ease. We believe in
          simplifying the development process by providing a robust, flexible,
          and customizable component library that balances speed with
          creativity. Our goal is to foster innovation by removing the
          complexity from UI development, allowing teams to focus on what
          matters most — creating seamless user experiences.
        </Typography>
      </Box>
    );
  };

  const renderKeyFeatures = () => {
    return (
      <Box marginProps={{ marginTop: QUICK_NAV_MAIN_TO_MAIN_SPACING }}>
        <ParagraphHeading
          title="Key Features"
          titleSize="huge"
          marginProps={{ marginBottom: "0" }}
        />
      </Box>
    );
  };

  const renderFastDevelopmentFeature = () => {
    return (
      <Box
        id={QuickNavIntroSubItemConst.fastDevelopment.sectionId}
        marginProps={{ marginTop: QUICK_NAV_MAIN_TO_SUB_SPACING }}
      >
        <ParagraphHeading title="Fast Development" titleSize="large" />
        <Typography>
          Streamlined components and concise documentation allow for rapid
          integration, reducing development time.
        </Typography>
      </Box>
    );
  };

  const renderEaseOfUse = () => {
    return (
      <Box
        id={QuickNavIntroSubItemConst.easeOfUse.sectionId}
        marginProps={{ marginTop: QUICK_NAV_MAIN_TO_SUB_SPACING }}
      >
        <ParagraphHeading title="Ease of Use" titleSize="large" />
        <Typography>
          Designed with simplicity in mind, Usy-UI provides clean and
          straightforward APIs that even beginners can easily adopt.
        </Typography>
      </Box>
    );
  };

  const renderCustomizationOptions = () => {
    return (
      <Box
        id={QuickNavIntroSubItemConst.customizationOptions.sectionId}
        marginProps={{ marginTop: QUICK_NAV_MAIN_TO_SUB_SPACING }}
      >
        <ParagraphHeading title="Customization Options" titleSize="large" />
        <Typography>
          Each component is highly customizable, enabling developers to adjust
          styling, behavior, and layouts to fit any project is requirements
          without complexity.
        </Typography>
      </Box>
    );
  };

  const renderResponsiveAndAccessible = () => {
    return (
      <Box
        id={QuickNavIntroSubItemConst.responsiveAccessible.sectionId}
        marginProps={{ marginTop: QUICK_NAV_MAIN_TO_SUB_SPACING }}
      >
        <ParagraphHeading title="Responsive & Accessible" titleSize="large" />
        <Typography>
          Built to ensure compatibility across devices and support accessibility
          standards.
        </Typography>
      </Box>
    );
  };

  const renderModularDesign = () => {
    return (
      <Box
        id={QuickNavIntroSubItemConst.modularDesign.sectionId}
        marginProps={{ marginTop: QUICK_NAV_MAIN_TO_SUB_SPACING }}
      >
        <ParagraphHeading title="Modular Design" titleSize="large" />
        <Typography>
          Import only what you need, optimizing performance and reducing bundle
          size.
        </Typography>
      </Box>
    );
  };

  return (
    <>
      {renderIntroduction()}
      {renderVision()}
      {renderKeyFeatures()}
      {renderFastDevelopmentFeature()}
      {renderEaseOfUse()}
      {renderCustomizationOptions()}
      {renderResponsiveAndAccessible()}
      {renderModularDesign()}
    </>
  );
};

export default Introduction;
