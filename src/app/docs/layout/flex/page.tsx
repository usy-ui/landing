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

import { FlexPropsRowsConst } from "./constants";
import { Display } from "./examples/display";

const Flex = () => {
  const sourceUrl = getCompSourceUrl("Flex");
  const reportIssueUrl = getReportIssueUrl("Flex");
  const { display: displayExampleCode } = useExamplesPreviews({
    root: "layout",
    compName: "flex",
    examplesTypes: ["display", "directions"],
  });

  return (
    <>
      <OverviewSection
        name="Flex"
        description="Simplifies alignment and spacing with flexible row and column options for responsive design"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Flex")}
      />
      <ApisSection dataRows={FlexPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="display"
          uiPreview={<Display />}
          code={displayExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Flex;
