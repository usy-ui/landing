import { useMemo } from "react";

import { DocsQuickNavSubItemUnion } from "@/components/docs/docs-content/types";
import { readFile } from "@/utils";

type UseExamplePreviewProps = {
  root: "components" | "form-fields";
  compName: string;
  examplesTypes: DocsQuickNavSubItemUnion[];
};

export const useExamplesPreviews = ({
  root,
  compName,
  examplesTypes = [],
}: UseExamplePreviewProps) => {
  const examplesCode = useMemo<Record<DocsQuickNavSubItemUnion, string>>(
    () =>
      examplesTypes.reduce(
        (acc, type) => {
          acc[type] = readFile(
            `./src/app/docs/${root}/${compName}/examples/${type}.tsx`
          );
          return acc;
        },
        {} as Record<DocsQuickNavSubItemUnion, string>
      ),
    [root, compName, examplesTypes]
  );

  return examplesCode;
};
