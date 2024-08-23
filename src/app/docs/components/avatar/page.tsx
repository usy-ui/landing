"use client";

import { SpecApiReference } from "@/components/docs/spec-api-reference";
import { SpecOverview } from "@/components/docs/spec-overview";

import { propsDataRows } from "./avatar.constants";
// import { avatarUrl } from "@/constants/media.constants";

const AvatarDoc = () => {
  // const tabs = [
  //   {
  //     id: "preview",
  //     label: "Preview",
  //     content: (
  //       <Flex
  //         heightProps={{ minHeight: "200px" }}
  //         justifyContent="center"
  //         alignItems="center"
  //         gap={usySpacing.px32}
  //       >
  //         <Avatar url={avatarUrl} imgAlt="avatar" radius="none" />
  //         <Avatar url={avatarUrl} imgAlt="avatar" radius="small" />
  //         <Avatar url="" imgAlt="avatar" fallback="A" />
  //       </Flex>
  //     ),
  //   },
  //   { id: "code", label: "Coding", content: <div>Coding</div> },
  // ];

  /**
   * Render
   */

  return (
    <>
      <SpecOverview
        compName="Avatar"
        compDescription="An image element with a fallback for representing the user."
        viewSourceUrl="https://github.com/usy-ui/themes/tree/main/src/components/Avatar"
        reportAnIssueUrl="https://github.com/usy-ui/themes/issues/new?title=[Avatar]%20Issue"
        importCommand={`import { Avatar } from "usy-ui"`}
      />
      <SpecApiReference
        description="This component inherits props from the Avatar primitive."
        dataRows={propsDataRows}
      />
    </>
  );
};

export default AvatarDoc;
