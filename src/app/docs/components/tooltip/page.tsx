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
import { useExamplesPreviews } from "@/hooks/useExamplesPreviews";

import { TooltipPropsRowsConst } from "./constants";
import { Positions } from "./examples/positions";

const Tooltip = () => {
  const sourceUrl = getCompSourceUrl("Tooltip");
  const reportIssueUrl = getReportIssueUrl("Tooltip");
  const { positions: positionsExampleCode } = useExamplesPreviews({
    root: "components",
    compName: "tooltip",
    examplesTypes: ["positions"],
  });

  return (
    <>
      <OverviewSection
        name="Tooltip"
        description="Provide additional information on hover, enhancing clarity without cluttering the interface."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Tooltip")}
      />
      <ApisSection dataRows={TooltipPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="positions"
          uiPreview={<Positions />}
          code={positionsExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Tooltip;
