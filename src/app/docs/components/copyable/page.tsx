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

import { CopyablePropsRowsConst } from "./constants";
import { Default } from "./examples/default";

const Copyable = () => {
  const sourceUrl = getCompSourceUrl("Copyable");
  const reportIssueUrl = getReportIssueUrl("Copyable");
  const { default: defaultExampleCode } = useExamplesPreviews({
    root: "components",
    compName: "copyable",
    examplesTypes: ["default"],
  });

  return (
    <>
      <OverviewSection
        name="Copyable"
        description="Quick copy text to the clipboard with a single click"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Copyable")}
      />
      <ApisSection dataRows={CopyablePropsRowsConst} />
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

export default Copyable;
