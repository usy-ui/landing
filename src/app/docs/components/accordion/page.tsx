import { CompApisSection } from "@/components/docs/component/comp-apis-section";
import {
  CompExamplesSection,
  CompExample,
} from "@/components/docs/component/comp-examples-section";
import { CompOverviewSection } from "@/components/docs/component/comp-overview-section";
import {
  getCompSourceUrl,
  getReportIssueUrl,
} from "@/components/docs/component/utils";
import { useCompExamples } from "@/hooks/useCompExamples";

import { specApiDataRows } from "./accordion.constants";
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
        description="Default component"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={`import { Accordion } from "usy-ui"`}
      />
      <CompApisSection
        description="This component inherits props from the Avatar primitive."
        dataRows={specApiDataRows}
      />
      <CompExamplesSection>
        <CompExample
          type="default"
          description="Use the radius prop to assign a specific radius value."
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
      </CompExamplesSection>
    </>
  );
};

export default Accordion;
