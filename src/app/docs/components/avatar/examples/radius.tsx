import { Avatar } from "usy-ui";

import { avatarUrl } from "@/constants/mock.constants";

export const Radius = () => {
  return (
    <>
      <Avatar url={avatarUrl} imgAlt="avatar" radius="none" />
      <Avatar url={avatarUrl} imgAlt="avatar" radius="small" />
      <Avatar url={avatarUrl} imgAlt="avatar" radius="medium" />
      <Avatar url={avatarUrl} imgAlt="avatar" radius="large" />
      <Avatar url={avatarUrl} imgAlt="avatar" radius="full" />
    </>
  );
};
