"use client";
import { FC, ReactNode, useMemo } from "react";

import { JetBrains_Mono } from "next/font/google";
import { CodeBlock, dracula } from "react-code-blocks";
import {
  Box,
  Flex,
  PanelTitle,
  TabItemType,
  Tabs,
  usyFontSize,
  usySpacing,
} from "usy-ui";

import { QUICK_NAV_MAIN_TO_SUB_SPACING } from "@/constants/layout.constants";

import { QuickNavCompExampleItemConst } from "../../_constants/comp.constants";
import { DocsQuickNavExampleItemUnion } from "../../docs.types";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

type ExampleProps = {
  type: DocsQuickNavExampleItemUnion;
  description: string;
  uiPreview: ReactNode;
  code: string;
};

export const Example: FC<ExampleProps> = ({
  type,
  description,
  uiPreview,
  code,
}) => {
  const { name, sectionId } = QuickNavCompExampleItemConst[type];
  const tabs: TabItemType[] = useMemo(
    () => [
      {
        id: "preview",
        label: "Preview",
        content: (
          <Flex
            justifyContent="center"
            alignItems="center"
            gap={usySpacing.px20}
            heightProps={{ minHeight: "200px" }}
            paddingProps={{ padding: usySpacing.px32 }}
          >
            {uiPreview}
          </Flex>
        ),
      },
      {
        id: "code",
        label: "Code",
        content: (
          <CodeBlock
            theme={dracula}
            language="typescript"
            text={code}
            customStyle={{
              fontSize: usyFontSize.medium,
              fontFamily: jetBrainsMono.style.fontFamily,
            }}
          />
        ),
      },
    ],
    [uiPreview, code]
  );

  return (
    <Box
      id={sectionId}
      marginProps={{ marginTop: QUICK_NAV_MAIN_TO_SUB_SPACING }}
    >
      <PanelTitle title={name} description={description} size="large" />
      <Tabs tabs={tabs} />
    </Box>
  );
};
