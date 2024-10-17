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

import { AvatarPropsRowsConst } from "./constants";
import { Fallback, Radius, Size } from "./examples";

const AvatarDoc = () => {
  const sourceUrl = getCompSourceUrl("Avatar");
  const reportIssueUrl = getReportIssueUrl("Avatar");
  const {
    size: sizeExampleCode,
    radius: radiusExampleCode,
    fallback: fallbackExampleCode,
  } = useExamplesPreviews({
    component: "avatar",
    types: ["size", "radius", "fallback"],
  });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Avatar"
        description="An image element with a fallback for representing the user."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Avatar")}
      />
      <ApisSection
        description="This component inherits props from the Avatar primitive."
        dataRows={AvatarPropsRowsConst}
      />
      <ExamplesSection>
        <ExamplePreview
          type="size"
          uiPreview={<Size />}
          code={sizeExampleCode}
        />
        <ExamplePreview
          type="radius"
          uiPreview={<Radius />}
          code={radiusExampleCode}
        />
        <ExamplePreview
          type="fallback"
          uiPreview={<Fallback />}
          code={fallbackExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default AvatarDoc;
