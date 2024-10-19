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

import { InputPropsRowsConst } from "./constants";
import { Default } from "./examples/default";
import { Form } from "./examples/form";
import { Icon } from "./examples/icon";
import { Size } from "./examples/size";
import { Type } from "./examples/type";

const Input = () => {
  const sourceUrl = getCompSourceUrl("Input");
  const reportIssueUrl = getReportIssueUrl("Input");
  const {
    default: defaultExampleCode,
    type: typeExampleCode,
    size: sizeExampleCode,
    icon: iconExampleCode,
    form: formExampleCode,
  } = useExamplesPreviews({
    root: "form-fields",
    compName: "input",
    examplesTypes: ["default", "type", "size", "icon", "form"],
  });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Input"
        description="Displays a form input field or a component that looks like an input field."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Input")}
      />
      <ApisSection dataRows={InputPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="default"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
        <ExamplePreview
          type="type"
          uiPreview={<Type />}
          code={typeExampleCode}
        />
        <ExamplePreview
          type="size"
          uiPreview={<Size />}
          code={sizeExampleCode}
        />
        <ExamplePreview
          type="icon"
          uiPreview={<Icon />}
          code={iconExampleCode}
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

export default Input;
