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

import { TextAreaPropsRowsConst } from "./constants";
import { Default } from "./examples/default";
import { Form } from "./examples/form";

const TextArea = () => {
  const sourceUrl = getCompSourceUrl("TextArea", "_Form");
  const reportIssueUrl = getReportIssueUrl("TextArea");
  const { default: defaultExampleCode, form: formExampleCode } =
    useExamplesPreviews({
      root: "form-fields",
      compName: "textarea",
      examplesTypes: ["default", "form"],
    });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="TextArea"
        description="Displays a form textarea or a component that looks like a textarea"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("TextArea")}
      />
      <ApisSection dataRows={TextAreaPropsRowsConst} />
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

export default TextArea;
