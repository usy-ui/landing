import { FC, ReactNode } from "react";

import { Scrollable, Tooltip, Typography } from "@usy-ui/base";

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
        <Scrollable heightProps={{ maxHeight: "300px" }} showScrollOnHover>
          <CodeBlock code={exampleCode} showLineNumbers={false} />
        </Scrollable>
      }
    >
      <Typography size="small">{children}</Typography>
    </Tooltip>
  );
};
