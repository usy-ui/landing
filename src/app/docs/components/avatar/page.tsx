"use client";

// import { avatarUrl } from "@/constants/media.constants";
import { SpecificationOverview } from "@/components/docs/specification-overview";

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
      <SpecificationOverview
        compName="Avatar"
        compDescription="An image element with a fallback for representing the user."
        viewSourceUrl="https://github.com/usy-ui/themes/tree/main/src/components/Avatar"
        reportAnIssueUrl="https://github.com/usy-ui/themes/issues/new?title=[Avatar]%20Issue"
        importCommand={`import { Avatar } from "usy-ui"`}
      />
    </>
  );
};

export default AvatarDoc;
