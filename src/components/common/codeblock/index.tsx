"use client";
import { FC } from "react";

import { JetBrains_Mono } from "next/font/google";
import { CodeBlock as BaseCodeBlock, dracula } from "react-code-blocks";
import { SupportedLanguages } from "react-code-blocks/dist/types";
import { usyFontSize } from "usy-ui";

type CodeBlockProps = {
  code: string;
  language?: SupportedLanguages;
};

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const CodeBlock: FC<CodeBlockProps> = ({ code, language = "tsx" }) => {
  return (
    <BaseCodeBlock
      theme={dracula}
      language={language}
      text={code}
      customStyle={{
        fontSize: usyFontSize.medium,
        fontFamily: jetBrainsMono.style.fontFamily,
      }}
    />
  );
};
