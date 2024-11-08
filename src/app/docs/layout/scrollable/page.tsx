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
import { useExamplesPreviews } from "@/hooks/useExamplesPreviews";

import { ScrollablePropsRowsConst } from "./constants";
import { ScrollType } from "./examples/scroll-type";
import { ShowScrollOnHover } from "./examples/show-scroll-on-hover";

const Scrollable = () => {
  const sourceUrl = getCompSourceUrl("Scrollable");
  const reportIssueUrl = getReportIssueUrl("Scrollable");
  const {
    "scroll-type": scrollTypeExampleCode,
    "show-scroll-on-hover": showScrollOnHoverExampleCode,
  } = useExamplesPreviews({
    root: "layout",
    compName: "scrollable",
    examplesTypes: ["scroll-type", "show-scroll-on-hover"],
  });

  return (
    <>
      <OverviewSection
        name="Scrollable"
        description="Create containers with customizable scroll behavior, allowing content to be easily navigated within limited space."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Scrollable")}
      />
      <ApisSection dataRows={ScrollablePropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="scroll-type"
          uiPreview={<ScrollType />}
          code={scrollTypeExampleCode}
        />
        <ExamplePreview
          type="show-scroll-on-hover"
          uiPreview={<ShowScrollOnHover />}
          code={showScrollOnHoverExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Scrollable;
