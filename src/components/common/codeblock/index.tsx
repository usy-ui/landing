"use client";
import { FC } from "react";

import { CodeBlock as BaseCodeBlock, dracula } from "react-code-blocks";
import { SupportedLanguages } from "react-code-blocks/dist/types";
import { usyFontSize } from "usy-ui";

import { fontJetBrainsMono } from "@/constants/fonts.constants";

type CodeBlockProps = {
  code: string;
  language?: SupportedLanguages;
};

export const CodeBlock: FC<CodeBlockProps> = ({ code, language = "tsx" }) => {
  return (
    <BaseCodeBlock
      theme={dracula}
      language={language}
      text={code}
      customStyle={{
        fontSize: usyFontSize.medium,
        fontFamily: fontJetBrainsMono.style.fontFamily,
      }}
    />
  );
};
