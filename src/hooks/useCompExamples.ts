import { readFileSync } from "fs";
import path from "path";

import { useMemo } from "react";

import { CompQuickNavSubItemUnion } from "@/components/docs/component/types";

type UseCompExampleProps = {
  component: string;
  types: CompQuickNavSubItemUnion[];
};

export const useCompExamples = ({
  component,
  types = [],
}: UseCompExampleProps) => {
  const examplesCode = useMemo<Record<CompQuickNavSubItemUnion, string>>(
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
        {} as Record<CompQuickNavSubItemUnion, string>
      ),
    [component, types]
  );

  return examplesCode;
};
