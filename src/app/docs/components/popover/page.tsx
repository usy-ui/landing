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

import { PopoverPropsRowsConst } from "./constants";
import { Positions } from "./examples/positions";

const Popover = () => {
  const sourceUrl = getCompSourceUrl("Popover");
  const reportIssueUrl = getReportIssueUrl("Popover");
  const { positions: positionsExampleCode } = useExamplesPreviews({
    root: "components",
    compName: "popover",
    examplesTypes: ["positions"],
  });

  return (
    <>
      <OverviewSection
        name="Popover"
        description="Displays rich content in a portal, triggered by a button."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Popover")}
      />
      <ApisSection dataRows={PopoverPropsRowsConst} />
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

export default Popover;
