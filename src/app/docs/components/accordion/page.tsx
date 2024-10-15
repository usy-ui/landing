import { ApisSection } from "@/components/docs/docs-content/apis-section";
import {
  ExamplesSection,
  CompExample,
} from "@/components/docs/docs-content/examples-section";
import { OverviewSection } from "@/components/docs/docs-content/overview-section";
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
      <OverviewSection
        name="Accordion"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={`import { Accordion } from "@usy-ui/base"`}
      />
      <ApisSection
        description="Contain all supported props"
        dataRows={specApiDataRows}
      />
      <ExamplesSection>
        <CompExample
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
