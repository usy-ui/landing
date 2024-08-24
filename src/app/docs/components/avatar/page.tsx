import {
  getCompSourceUrl,
  getReportIssueUrl,
} from "@/components/docs/docs.utils";
import { SpecApi } from "@/components/docs/spec-api";
import { SpecExamples } from "@/components/docs/spec-examples";
import { Example } from "@/components/docs/spec-examples/examples";
import { SpecOverview } from "@/components/docs/spec-overview";

import { specApiDataRows } from "./avatar.constants";
import { Fallback, Radius, Size } from "./examples";

const AvatarDoc = () => {
  const sourceUrl = getCompSourceUrl("Avatar");
  const reportIssueUrl = getReportIssueUrl("Avatar");

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
          code={`<Avatar url={avatarUrl} imgAlt="avatar" radius="none" />`}
        />
        <Example
          type="radius"
          description="Use the radius prop to assign a specific radius value."
          uiPreview={<Radius />}
          code={`<Avatar url={avatarUrl} imgAlt="avatar" radius="none" />`}
        />
        <Example
          type="fallback"
          description="Use the radius prop to assign a specific radius value."
          uiPreview={<Fallback />}
          code={`<Avatar url={avatarUrl} imgAlt="avatar" radius="none" />`}
        />
      </SpecExamples>
    </>
  );
};

export default AvatarDoc;
