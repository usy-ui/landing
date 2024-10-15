"use client";
import { FC } from "react";

import { usyFontSize } from "@usy-ui/base";
import { CodeBlock as BaseCodeBlock, dracula } from "react-code-blocks";
import { SupportedLanguages } from "react-code-blocks/dist/types";

import { fontJetBrainsMono } from "@/constants/fonts.constants";

import { CodeBlockContainer } from "./styled";

type CodeBlockProps = {
  code: string;
  language?: SupportedLanguages;
  showLineNumbers?: boolean;
};

export const CodeBlock: FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  showLineNumbers = true,
}) => {
  return (
    <CodeBlockContainer>
      <BaseCodeBlock
        theme={dracula}
        language={language}
        text={code}
        showLineNumbers={showLineNumbers}
        customStyle={{
          fontSize: usyFontSize.medium,
          fontFamily: fontJetBrainsMono.style.fontFamily,
          backgroundColor: "transparent",
        }}
      />
    </CodeBlockContainer>
  );
};
