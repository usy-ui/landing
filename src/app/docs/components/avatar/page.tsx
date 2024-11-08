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

import { AvatarPropsRowsConst } from "./constants";
import { Fallback, Radius, Sizes } from "./examples";

const AvatarDoc = () => {
  const sourceUrl = getCompSourceUrl("Avatar");
  const reportIssueUrl = getReportIssueUrl("Avatar");
  const {
    sizes: sizesExampleCode,
    radius: radiusExampleCode,
    fallback: fallbackExampleCode,
  } = useExamplesPreviews({
    root: "components",
    compName: "avatar",
    examplesTypes: ["sizes", "radius", "fallback"],
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
      <ApisSection dataRows={AvatarPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="sizes"
          uiPreview={<Sizes />}
          code={sizesExampleCode}
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
