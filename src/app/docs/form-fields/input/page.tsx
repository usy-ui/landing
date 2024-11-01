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
import { Icons } from "./examples/icons";
import { Sizes } from "./examples/sizes";
import { Types } from "./examples/types";

const Input = () => {
  const sourceUrl = getCompSourceUrl("Input", "_Form");
  const reportIssueUrl = getReportIssueUrl("Input");
  const {
    default: defaultExampleCode,
    types: typesExampleCode,
    sizes: sizesExampleCode,
    icons: iconsExampleCode,
    form: formExampleCode,
  } = useExamplesPreviews({
    root: "form-fields",
    compName: "input",
    examplesTypes: ["default", "types", "sizes", "icons", "form"],
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
          type="types"
          uiPreview={<Types />}
          code={typesExampleCode}
        />
        <ExamplePreview
          type="sizes"
          uiPreview={<Sizes />}
          code={sizesExampleCode}
        />
        <ExamplePreview
          type="icons"
          uiPreview={<Icons />}
          code={iconsExampleCode}
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
