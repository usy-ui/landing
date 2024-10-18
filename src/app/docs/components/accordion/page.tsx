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

import { AccordionPropsRowsConst } from "./constants";
import { Default } from "./examples/default";

const Accordion = () => {
  const sourceUrl = getCompSourceUrl("Accordion");
  const reportIssueUrl = getReportIssueUrl("Accordion");
  const { default: defaultExampleCode } = useExamplesPreviews({
    root: "components",
    compName: "accordion",
    examplesTypes: ["default"],
  });

  return (
    <>
      <OverviewSection
        name="Accordion"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Accordion")}
      />
      <ApisSection dataRows={AccordionPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="default"
          description="The pure component with default props"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Accordion;
