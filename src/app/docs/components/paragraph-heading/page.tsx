import { ApisSection } from "@/components/docs/docs-content/apis-section";
import {
  ExamplesSection,
  ExamplePreview,
} from "@/components/docs/docs-content/examples-section";
import { OverviewSection } from "@/components/docs/docs-content/overview-section";
import {
  getCompSourceUrl,
  getImportCommand,
  getReportIssueUrl,
} from "@/components/docs/docs-content/utils";
import { useExamplesPreviews } from "@/hooks/useExamplesPreviews";

import { ParagraphHeadingPropsRowsConst } from "./constants";
import { Default } from "./examples/default";

const ParagraphHeading = () => {
  const sourceUrl = getCompSourceUrl("ParagraphHeading");
  const reportIssueUrl = getReportIssueUrl("ParagraphHeading");
  const { default: defaultExampleCode } = useExamplesPreviews({
    root: "components",
    compName: "paragraph-heading",
    examplesTypes: ["default"],
  });

  return (
    <>
      <OverviewSection
        name="ParagraphHeading"
        description="Include title and description typography, often used for paragraph heading"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("ParagraphHeading")}
      />
      <ApisSection dataRows={ParagraphHeadingPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="default"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default ParagraphHeading;
