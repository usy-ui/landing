"use client";
import { FC, ReactNode, useMemo } from "react";

import {
  Box,
  Flex,
  ParagraphHeading,
  TabItemType,
  Tabs,
  usySpacing,
} from "usy-ui";

import { CodeBlock } from "@/components/common/codeblock";
import { QUICK_NAV_MAIN_TO_SUB_SPACING } from "@/constants/layout.constants";

import { QuickNavCompExampleItemConst } from "../../_constants/comp.constants";
import { DocsQuickNavExampleItemUnion } from "../../docs.types";

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
        content: <CodeBlock code={code} />,
      },
    ],
    [uiPreview, code]
  );

  return (
    <Box
      id={sectionId}
      marginProps={{ marginTop: QUICK_NAV_MAIN_TO_SUB_SPACING }}
    >
      <ParagraphHeading title={name} description={description} size="large" />
      <Tabs tabs={tabs} />
    </Box>
  );
};
