import { ApisSection } from "@/components/docs/docs-content/apis-section";
import {
  CompExample,
  ExamplesSection,
} from "@/components/docs/docs-content/examples-section";
import { OverviewSection } from "@/components/docs/docs-content/overview-section";
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
      <OverviewSection
        name="Avatar"
        description="An image element with a fallback for representing the user."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={`import { Avatar } from "@usy-ui/base"`}
      />
      <ApisSection
        description="This component inherits props from the Avatar primitive."
        dataRows={specApiDataRows}
      />
      <ExamplesSection>
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
      </ExamplesSection>
    </>
  );
};

export default AvatarDoc;
