import { CompApi } from "@/components/docs/comp-api";
import { CompExamples } from "@/components/docs/comp-examples";
import { Example } from "@/components/docs/comp-examples/examples";
import { CompOverview } from "@/components/docs/comp-overview";
import {
  getCompSourceUrl,
  getReportIssueUrl,
} from "@/components/docs/docs.utils";
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
      <CompOverview
        name="Accordion"
        description="Default component"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={`import { Accordion } from "usy-ui"`}
      />
      <CompApi
        description="This component inherits props from the Avatar primitive."
        dataRows={specApiDataRows}
      />
      <CompExamples>
        <Example
          type="size"
          description="Use the radius prop to assign a specific radius value."
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
      </CompExamples>
    </>
  );
};

export default Accordion;
