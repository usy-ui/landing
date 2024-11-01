"use client";
import { FC, ReactNode, useMemo } from "react";

import {
  Box,
  Flex,
  ParagraphHeading,
  TabItemType,
  Tabs,
  usySpacing,
} from "@usy-ui/base";

import { CodeBlock } from "@/components/common/codeblock";
import { QUICK_NAV_MAIN_TO_SUB_SPACING } from "@/constants/layout.constants";

import { DocsQuickNavSubItemConst } from "../../constants";
import { DocsQuickNavSubItemUnion } from "../../types";

import { StyledScrollable } from "./example-preview.styled";

type ExamplePreviewProps = {
  type: DocsQuickNavSubItemUnion;
  description?: string;
  uiPreview: ReactNode;
  code: string;
};

export const ExamplePreview: FC<ExamplePreviewProps> = ({
  type,
  description,
  uiPreview,
  code,
}) => {
  const {
    name,
    description: fallbackDesc,
    sectionId,
  } = DocsQuickNavSubItemConst[type];
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
          <StyledScrollable heightProps={{ maxHeight: "500px" }}>
            <CodeBlock code={code} />
          </StyledScrollable>
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
      <ParagraphHeading
        title={name}
        description={description || fallbackDesc}
        titleSize="large"
      />
      <Tabs tabs={tabs} />
    </Box>
  );
};
