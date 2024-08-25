import { readFileSync } from "fs";
import path from "path";

import { useMemo } from "react";

import { DocsQuickNavExampleItemUnion } from "@/components/docs/docs.types";

type UseCompExampleProps = {
  component: string;
  types: DocsQuickNavExampleItemUnion[];
};

export const useCompExamples = ({
  component,
  types = [],
}: UseCompExampleProps) => {
  const examplesCode = useMemo<Record<DocsQuickNavExampleItemUnion, string>>(
    () =>
      types.reduce(
        (acc, type) => {
          const exampleCode = readFileSync(
            path.resolve(
              `./src/app/docs/components/${component}/examples/${type}.tsx`
            ),
            "utf-8"
          );

          acc[type] = exampleCode;
          return acc;
        },
        {} as Record<DocsQuickNavExampleItemUnion, string>
      ),
    [component, types]
  );

  return examplesCode;
};
