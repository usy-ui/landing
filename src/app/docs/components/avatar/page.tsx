import {
  getCompSourceUrl,
  getReportIssueUrl,
} from "@/components/docs/docs.utils";
import { SpecApi } from "@/components/docs/spec-api";
import { SpecExamples } from "@/components/docs/spec-examples";
import { Example } from "@/components/docs/spec-examples/examples";
import { SpecOverview } from "@/components/docs/spec-overview";
import { useSpecExamples } from "@/hooks/useSpecExamples";

import { specApiDataRows } from "./avatar.constants";
import { Fallback, Radius, Size } from "./examples";

const AvatarDoc = () => {
  const sourceUrl = getCompSourceUrl("Avatar");
  const reportIssueUrl = getReportIssueUrl("Avatar");
  const {
    size: sizeExampleCode,
    radius: radiusExampleCode,
    fallback: fallbackExampleCode,
  } = useSpecExamples({
    component: "avatar",
    types: ["size", "radius", "fallback"],
  });

  /**
   * Render
   */

  return (
    <>
      <SpecOverview
        name="Avatar"
        description="An image element with a fallback for representing the user."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={`import { Avatar } from "usy-ui"`}
      />
      <SpecApi
        description="This component inherits props from the Avatar primitive."
        dataRows={specApiDataRows}
      />
      <SpecExamples>
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
      </SpecExamples>
    </>
  );
};

export default AvatarDoc;
