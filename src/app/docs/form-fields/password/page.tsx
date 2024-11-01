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
import { Icons } from "./examples/icons";
import { Sizes } from "./examples/sizes";

const Password = () => {
  const sourceUrl = getCompSourceUrl("Password", "_Form");
  const reportIssueUrl = getReportIssueUrl("Password");
  const {
    default: defaultExampleCode,
    sizes: sizesExampleCode,
    icons: iconsExampleCode,
    form: formExampleCode,
  } = useExamplesPreviews({
    root: "form-fields",
    compName: "password",
    examplesTypes: ["default", "sizes", "icons", "form"],
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

export default Password;
