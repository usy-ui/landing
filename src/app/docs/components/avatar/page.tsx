import { CompApisSection } from "@/components/docs/docs-content/comp-apis-section";
import {
  CompExample,
  CompExamplesSection,
} from "@/components/docs/docs-content/comp-examples-section";
import { CompOverviewSection } from "@/components/docs/docs-content/comp-overview-section";
import {
  getCompSourceUrl,
  getReportIssueUrl,
} from "@/components/docs/docs-content/utils";
import { useCompExamples } from "@/hooks/useCompExamples";

import { specApiDataRows } from "./avatar.constants";
import { Fallback, Radius, Size } from "./examples";

const AvatarDoc = () => {
  const sourceUrl = getCompSourceUrl("Avatar");
  const reportIssueUrl = getReportIssueUrl("Avatar");
  const {
    size: sizeExampleCode,
    radius: radiusExampleCode,
    fallback: fallbackExampleCode,
  } = useCompExamples({
    component: "avatar",
    types: ["size", "radius", "fallback"],
  });

  /**
   * Render
   */

  return (
    <>
      <CompOverviewSection
        name="Avatar"
        description="An image element with a fallback for representing the user."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={`import { Avatar } from "@usy-ui/base"`}
      />
      <CompApisSection
        description="This component inherits props from the Avatar primitive."
        dataRows={specApiDataRows}
      />
      <CompExamplesSection>
        <CompExample
          type="size"
          description="Use the radius prop to assign a specific radius value."
          uiPreview={<Size />}
          code={sizeExampleCode}
        />
        <CompExample
          type="radius"
          description="Use the radius prop to assign a specific radius value."
          uiPreview={<Radius />}
          code={radiusExampleCode}
        />
        <CompExample
          type="fallback"
          description="Use the radius prop to assign a specific radius value."
          uiPreview={<Fallback />}
          code={fallbackExampleCode}
        />
      </CompExamplesSection>
    </>
  );
};

export default AvatarDoc;
