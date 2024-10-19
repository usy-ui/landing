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

import { PasswordPropsRowsConst } from "./constants";
import { Default } from "./examples/default";
import { Form } from "./examples/form";
import { Icon } from "./examples/icon";
import { Size } from "./examples/size";

const Password = () => {
  const sourceUrl = getCompSourceUrl("Password");
  const reportIssueUrl = getReportIssueUrl("Password");
  const {
    default: defaultExampleCode,
    size: sizeExampleCode,
    icon: iconExampleCode,
    form: formExampleCode,
  } = useExamplesPreviews({
    root: "form-fields",
    compName: "password",
    examplesTypes: ["default", "size", "icon", "form"],
  });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Password"
        description="Secure your sensitive password"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Password")}
      />
      <ApisSection dataRows={PasswordPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="default"
          uiPreview={<Default />}
          code={defaultExampleCode}
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

export default Password;
