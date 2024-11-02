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

import { TagsPropsRowsConst } from "./constants";
import { Default } from "./examples/default";
import { Form } from "./examples/form";

const Tags = () => {
  const sourceUrl = getCompSourceUrl("Tags", "_Form");
  const reportIssueUrl = getReportIssueUrl("Tags");
  const { default: defaultExampleCode, form: formExampleCode } =
    useExamplesPreviews({
      root: "form-fields",
      compName: "tags",
      examplesTypes: ["default", "form"],
    });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Tags"
        description="Used for items that need to be labeled, categorized, or organized using keywords"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Tags")}
      />
      <ApisSection dataRows={TagsPropsRowsConst} />
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

export default Tags;
