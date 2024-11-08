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

import { PanelPropsRowsConst } from "./constants";
import { Default } from "./examples/default";

const Panel = () => {
  const sourceUrl = getCompSourceUrl("Panel", "_Layout");
  const reportIssueUrl = getReportIssueUrl("Panel");
  const { default: defaultExampleCode } = useExamplesPreviews({
    root: "layout",
    compName: "panel",
    examplesTypes: ["default"],
  });

  return (
    <>
      <OverviewSection
        name="Panel"
        description="A versatile container for grouping content, headers enhance organization and clarity."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Panel")}
      />
      <ApisSection dataRows={PanelPropsRowsConst} />
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

export default Panel;
