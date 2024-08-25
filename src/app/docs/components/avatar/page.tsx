import { CompApi } from "@/components/docs/comp-api";
import { CompExamples } from "@/components/docs/comp-examples";
import { Example } from "@/components/docs/comp-examples/examples";
import { CompOverview } from "@/components/docs/comp-overview";
import {
  getCompSourceUrl,
  getReportIssueUrl,
} from "@/components/docs/docs.utils";
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
      <CompOverview
        name="Avatar"
        description="An image element with a fallback for representing the user."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={`import { Avatar } from "usy-ui"`}
      />
      <CompApi
        description="This component inherits props from the Avatar primitive."
        dataRows={specApiDataRows}
      />
      <CompExamples>
        <Example
          type="size"
          description="Use the radius prop to assign a specific radius value."
          uiPreview={<Size />}
          code={sizeExampleCode}
        />
        <Example
          type="radius"
          description="Use the radius prop to assign a specific radius value."
          uiPreview={<Radius />}
          code={radiusExampleCode}
        />
        <Example
          type="fallback"
          description="Use the radius prop to assign a specific radius value."
          uiPreview={<Fallback />}
          code={fallbackExampleCode}
        />
      </CompExamples>
    </>
  );
};

export default AvatarDoc;
