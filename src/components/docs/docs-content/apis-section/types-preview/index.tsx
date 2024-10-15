import { FC, ReactNode } from "react";

import { Tooltip, Typography } from "@usy-ui/base";

import { CodeBlock } from "@/components/common/codeblock";
import { useTypePreview } from "@/hooks/useTypePreview";

type TypesPreviewProps = {
  type: string;
  children: ReactNode;
};

export const TypesPreview: FC<TypesPreviewProps> = ({ type, children }) => {
  const exampleCode = useTypePreview(type);

  return (
    <Tooltip
      content={
        (
          <CodeBlock code={exampleCode} showLineNumbers={false} />
        ) as any as string
      }
    >
      <Typography size="small">{children}</Typography>
    </Tooltip>
  );
};
