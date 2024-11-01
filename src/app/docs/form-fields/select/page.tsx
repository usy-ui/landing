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

import { SelectPropsRowsConst } from "./constants";
import { Default } from "./examples/default";
import { Form } from "./examples/form";

const Select = () => {
  const sourceUrl = getCompSourceUrl("Select", "_Form");
  const reportIssueUrl = getReportIssueUrl("Select");
  const { default: defaultExampleCode, form: formExampleCode } =
    useExamplesPreviews({
      root: "form-fields",
      compName: "select",
      examplesTypes: ["default", "form"],
    });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Select"
        description="Displays a list of options for the user to pick"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Select")}
      />
      <ApisSection dataRows={SelectPropsRowsConst} />
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

export default Select;
