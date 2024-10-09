import {
  Box,
  Copyable,
  Flex,
  ParagraphHeading,
  Typography,
  usySpacing,
} from "@usy-ui/base";

import {
  QUICK_NAV_MAIN_TO_MAIN_SPACING,
  QUICK_NAV_MAIN_TO_SUB_SPACING,
} from "@/constants/layout.constants";

import {
  QuickNavGetStartMainItemConst,
  QuickNavGetStartSubItemConst,
} from "./constants";

const GettingStarted = () => {
  const renderGettingStarted = () => {
    return (
      <Box id={QuickNavGetStartMainItemConst.gettingStarted.sectionId}>
        <ParagraphHeading
          title="Getting Started"
          description="Install Usy UI and start your first component"
          titleSize="gigant-1"
          marginProps={{ marginBottom: usySpacing.px20 }}
        />
        <Typography>
          Welcome to Usy-UI! Follow these simple steps to start building
          powerful and customizable user interfaces in no time.
        </Typography>
      </Box>
    );
  };

  const renderInstallation = () => {
    return (
      <Box
        id={QuickNavGetStartMainItemConst.installation.sectionId}
        marginProps={{ marginTop: QUICK_NAV_MAIN_TO_MAIN_SPACING }}
      >
        <ParagraphHeading
          title="Installation"
          titleSize="huge"
          marginProps={{ marginBottom: usySpacing.px16 }}
        />
        <Typography>Getting up and running is quick and easy.</Typography>
      </Box>
    );
  };

  const renderInstallLibrary = () => {
    return (
      <Box
        id={QuickNavGetStartSubItemConst.installLibrary.sectionId}
        marginProps={{ marginTop: QUICK_NAV_MAIN_TO_SUB_SPACING }}
      >
        <ParagraphHeading title="Step 1: Install Library" titleSize="large" />
        <Typography>
          To get started, install Usy-UI via npm, yarn or pnpm:
        </Typography>
        <Flex direction="column">
          <Copyable
            text={`npm install usy-ui`}
            widthProps={{ width: "300px" }}
            marginProps={{ margin: `${usySpacing.px10} 0` }}
          />
          <Copyable
            text={`yarn add usy-ui`}
            widthProps={{ width: "300px" }}
            marginProps={{ margin: `${usySpacing.px10} 0` }}
          />
          <Copyable
            text={`pnpm add usy-ui`}
            widthProps={{ width: "300px" }}
            marginProps={{ margin: `${usySpacing.px10} 0` }}
          />
        </Flex>
      </Box>
    );
  };

  const renderImportCssFile = () => {
    return (
      <Box
        id={QuickNavGetStartSubItemConst.importCssFile.sectionId}
        marginProps={{ marginTop: QUICK_NAV_MAIN_TO_SUB_SPACING }}
      >
        <ParagraphHeading title="Step 2: Import CSS File" titleSize="large" />
        <Typography>
          Import the global CSS file at the root of your application.
        </Typography>
        <Copyable
          text={`import "usy-ui/dist/styles.css";`}
          widthProps={{ minWidth: "350px" }}
          marginProps={{ margin: `${usySpacing.px10} 0` }}
        />
      </Box>
    );
  };

  return (
    <>
      {renderGettingStarted()}
      {renderInstallation()}
      {renderInstallLibrary()}
      {renderImportCssFile()}
    </>
  );
};

export default GettingStarted;
