"use client";
import { Avatar, Flex, PanelTitle, Tabs, usySpacing } from "usy-ui";

import { avatarUrl } from "@/constants/media.constants";

const AvatarDoc = () => {
  const tabs = [
    {
      id: "preview",
      label: "Preview",
      content: (
        <Flex
          heightProps={{ minHeight: "200px" }}
          justifyContent="center"
          alignItems="center"
          gap={usySpacing.px32}
        >
          <Avatar url={avatarUrl} imgAlt="avatar" radius="none" />
          <Avatar url={avatarUrl} imgAlt="avatar" radius="small" />
          <Avatar url="" imgAlt="avatar" fallback="A" />
        </Flex>
      ),
    },
    { id: "code", label: "Coding", content: <div>Coding</div> },
  ];

  return (
    <>
      <PanelTitle
        title="Avatar"
        size="gigant-1"
        description="An image element with a fallback for representing the user."
      />
      <Tabs tabs={tabs} />
    </>
  );
};

export default AvatarDoc;
