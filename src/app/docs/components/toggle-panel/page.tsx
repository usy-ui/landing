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

import { TogglePanelPropsRowsConst } from "./constants";
import { Default } from "./examples/default";

const TogglePanel = () => {
  const sourceUrl = getCompSourceUrl("TogglePanel");
  const reportIssueUrl = getReportIssueUrl("TogglePanel");
  const { default: defaultExampleCode } = useExamplesPreviews({
    root: "components",
    compName: "toggle-panel",
    examplesTypes: ["default"],
  });

  return (
    <>
      <OverviewSection
        name="TogglePanel"
        description="Easily show or hide content with an interactive panel that toggles visibility"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("TogglePanel")}
      />
      <ApisSection dataRows={TogglePanelPropsRowsConst} />
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

export default TogglePanel;
