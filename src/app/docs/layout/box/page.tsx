import { ApisSection } from "@/components/docs/docs-content/apis-section";
import {
  ExamplePreview,
  ExamplesSection,
} from "@/components/docs/docs-content/examples-section";
import { OverviewSection } from "@/components/docs/docs-content/overview-section";
import {
  getCompSourceUrl,
  getImportCommand,
  getReportIssueUrl,
} from "@/components/docs/docs-content/utils";
import { useExamplesPreviews } from "@/hooks/useExamplesPreview";

import { BoxPropsRowsConst } from "./constants";
import { Default } from "./examples/default";

const Box = () => {
  const sourceUrl = getCompSourceUrl("Box");
  const reportIssueUrl = getReportIssueUrl("Box");
  const { default: defaultExampleCode } = useExamplesPreviews({
    root: "layout",
    compName: "box",
    examplesTypes: ["default"],
  });

  return (
    <>
      <OverviewSection
        name="Box"
        description="Provides layout structure and spacing control, perfect for building flexible and responsive designs"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Box")}
      />
      <ApisSection dataRows={BoxPropsRowsConst} />
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

export default Box;
