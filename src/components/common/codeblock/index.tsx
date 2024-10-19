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
  fontSize?: string;
};

/**
 * Utilities
 */

export const getJsonPreset = (code: object): CodeBlockProps => ({
  language: "json",
  code: JSON.stringify(code, null, 2),
  showLineNumbers: false,
  fontSize: usyFontSize.small,
});

/**
 * Component
 */

export const CodeBlock: FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  showLineNumbers = true,
  fontSize = usyFontSize.medium,
}) => {
  return (
    <CodeBlockContainer>
      <BaseCodeBlock
        theme={dracula}
        language={language}
        text={code}
        showLineNumbers={showLineNumbers}
        customStyle={{
          fontSize,
          fontFamily: fontJetBrainsMono.style.fontFamily,
          backgroundColor: "transparent",
        }}
      />
    </CodeBlockContainer>
  );
};
