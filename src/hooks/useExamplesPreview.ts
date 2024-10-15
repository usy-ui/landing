import { useMemo } from "react";

import { CompQuickNavSubItemUnion } from "@/components/docs/docs-content/types";
import { readFile } from "@/utils";

type UseExamplePreviewProps = {
  component: string;
  types: CompQuickNavSubItemUnion[];
};

export const useExamplesPreviews = ({
  component,
  types = [],
}: UseExamplePreviewProps) => {
  const examplesCode = useMemo<Record<CompQuickNavSubItemUnion, string>>(
    () =>
      types.reduce(
        (acc, type) => {
          acc[type] = readFile(
            `./src/app/docs/components/${component}/examples/${type}.tsx`
          );
          return acc;
        },
        {} as Record<CompQuickNavSubItemUnion, string>
      ),
    [component, types]
  );

  return examplesCode;
};
