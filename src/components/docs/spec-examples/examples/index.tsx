"use client";
import { FC, ReactNode, useMemo } from "react";

import { JetBrains_Mono } from "next/font/google";
import { CodeBlock, dracula } from "react-code-blocks";
import {
  Flex,
  PanelTitle,
  TabItemType,
  Tabs,
  usyFontSize,
  usySpacing,
} from "usy-ui";

import { SubToCItem, SubToCItemType } from "../../docs.constants";

import { ExampleContainer } from "./example.styled";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

type ExampleProps = {
  type: SubToCItemType;
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
  const { name, sectionId } = SubToCItem[type];
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
    <ExampleContainer id={sectionId}>
      <PanelTitle title={name} description={description} size="medium" />
      <Tabs tabs={tabs} />
    </ExampleContainer>
  );
};
