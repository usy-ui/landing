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

import { RadioGroupPropsRowsConst } from "./constants";
import { Default } from "./examples/default";
import { Direction } from "./examples/directions";
import { Form } from "./examples/form";

const RadioGroup = () => {
  const sourceUrl = getCompSourceUrl("RadioGroup", "_Form");
  const reportIssueUrl = getReportIssueUrl("RadioGroup");
  const { default: defaultExampleCode, form: formExampleCode } =
    useExamplesPreviews({
      root: "form-fields",
      compName: "radio-group",
      examplesTypes: ["default", "form"],
    });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="RadioGroup"
        description="Group of radio buttons, allowing to select a single choice from multiple options"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("RadioGroup")}
      />
      <ApisSection dataRows={RadioGroupPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="default"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
        <ExamplePreview
          type="directions"
          uiPreview={<Direction />}
          code={formExampleCode}
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

export default RadioGroup;
