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

import { CheckboxPropsRowsConst } from "./constants";
import { Default } from "./examples/default";
import { Form } from "./examples/form";

const Checkbox = () => {
  const sourceUrl = getCompSourceUrl("Checkbox", "_Form");
  const reportIssueUrl = getReportIssueUrl("Checkbox");
  const { default: defaultExampleCode, form: formExampleCode } =
    useExamplesPreviews({
      root: "form-fields",
      compName: "checkbox",
      examplesTypes: ["default", "form"],
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
        <ExamplePreview
          type="form"
          uiPreview={<Form />}
          code={formExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Checkbox;
