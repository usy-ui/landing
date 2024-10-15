import { CompApisSection } from "@/components/docs/docs-content/comp-apis-section";
import {
  CompExamplesSection,
  CompExample,
} from "@/components/docs/docs-content/comp-examples-section";
import { CompOverviewSection } from "@/components/docs/docs-content/comp-overview-section";
import {
  getCompSourceUrl,
  getReportIssueUrl,
} from "@/components/docs/docs-content/utils";
import { useCompExamples } from "@/hooks/useCompExamples";

import { specApiDataRows } from "./constants";
import { Default } from "./examples";

const Accordion = () => {
  const sourceUrl = getCompSourceUrl("Accordion");
  const reportIssueUrl = getReportIssueUrl("Accordion");
  const { default: defaultExampleCode } = useCompExamples({
    component: "accordion",
    types: ["default"],
  });

  return (
    <>
      <CompOverviewSection
        name="Accordion"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={`import { Accordion } from "@usy-ui/base"`}
      />
      <CompApisSection
        description="Contain all supported props"
        dataRows={specApiDataRows}
      />
      <CompExamplesSection>
        <CompExample
          type="default"
          description="The pure component with default props"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
      </CompExamplesSection>
    </>
  );
};

export default Accordion;
