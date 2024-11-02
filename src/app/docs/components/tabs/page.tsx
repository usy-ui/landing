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

import { TabsPropsRowsConst } from "./constants";
import { Default } from "./examples/default";

const Tabs = () => {
  const sourceUrl = getCompSourceUrl("Tabs");
  const reportIssueUrl = getReportIssueUrl("Tabs");
  const { default: defaultExampleCode } = useExamplesPreviews({
    root: "components",
    compName: "tabs",
    examplesTypes: ["default"],
  });

  return (
    <>
      <OverviewSection
        name="Tabs"
        description="A set of layered sections of content—known as tab panels—that are displayed one at a time"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Tabs")}
      />
      <ApisSection dataRows={TabsPropsRowsConst} />
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

export default Tabs;
