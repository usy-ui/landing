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

import { CompQuickNavSubItemConst } from "../../constants";
import { CompQuickNavSubItemUnion } from "../../types";

type ExampleProps = {
  type: CompQuickNavSubItemUnion;
  description: string;
  uiPreview: ReactNode;
  code: string;
};

export const CompExample: FC<ExampleProps> = ({
  type,
  description,
  uiPreview,
  code,
}) => {
  const { name, sectionId } = CompQuickNavSubItemConst[type];
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
      <ParagraphHeading
        title={name}
        description={description}
        titleSize="large"
      />
      <Tabs tabs={tabs} />
    </Box>
  );
};
