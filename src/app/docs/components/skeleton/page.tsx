import { ApisSection } from "@/components/docs/docs-content/apis-section";
import {
  ExamplesSection,
  ExamplePreview,
} from "@/components/docs/docs-content/examples-section";
import { OverviewSection } from "@/components/docs/docs-content/overview-section";
import {
  getCompSourceUrl,
  getImportCommand,
  getReportIssueUrl,
} from "@/components/docs/docs-content/utils";
import { useExamplesPreviews } from "@/hooks/useExamplesPreview";

import { SkeletonPropsRowsConst } from "./constants";
import { Default } from "./examples/default";

const Skeleton = () => {
  const sourceUrl = getCompSourceUrl("Skeleton");
  const reportIssueUrl = getReportIssueUrl("Skeleton");
  const { default: defaultExampleCode } = useExamplesPreviews({
    root: "components",
    compName: "skeleton",
    examplesTypes: ["default"],
  });

  return (
    <>
      <OverviewSection
        name="Skeleton"
        description="Use to show a placeholder while content is loading"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Skeleton")}
      />
      <ApisSection dataRows={SkeletonPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="default"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Skeleton;
