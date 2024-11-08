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

import { SwitchPropsRowsConst } from "./constants";
import { Default } from "./examples/default";
import { Form } from "./examples/form";
import { Sizes } from "./examples/sizes";

const Switch = () => {
  const sourceUrl = getCompSourceUrl("Switch", "_Form");
  const reportIssueUrl = getReportIssueUrl("Switch");
  const {
    default: defaultExampleCode,
    sizes: sizesExampleCode,
    form: formExampleCode,
  } = useExamplesPreviews({
    root: "form-fields",
    compName: "switch",
    examplesTypes: ["default", "sizes", "form"],
  });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Switch"
        description="A control that allows the user to toggle between checked and not checked"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Switch")}
      />
      <ApisSection dataRows={SwitchPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="default"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
        <ExamplePreview
          type="sizes"
          uiPreview={<Sizes />}
          code={sizesExampleCode}
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

export default Switch;
