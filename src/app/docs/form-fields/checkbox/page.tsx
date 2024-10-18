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
import { useExamplesPreviews } from "@/hooks/useExamplesPreview";

import { CheckboxPropsRowsConst } from "./constants";
import { Default } from "./examples/default";

const Checkbox = () => {
  const sourceUrl = getCompSourceUrl("Checkbox");
  const reportIssueUrl = getReportIssueUrl("Checkbox");
  const { default: defaultExampleCode } = useExamplesPreviews({
    root: "form-fields",
    compName: "checkbox",
    examplesTypes: ["default"],
  });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Checkbox"
        description="A control that allows the user to toggle between checked and not checked."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Checkbox")}
      />
      <ApisSection dataRows={CheckboxPropsRowsConst} />
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

export default Checkbox;
