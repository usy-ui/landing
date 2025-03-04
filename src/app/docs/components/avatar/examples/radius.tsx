import { Avatar } from "@usy-ui/base";

import { avatarUrl } from "@/constants/mock.constants";

export const Radius = () => {
  return (
    <>
      <Avatar src={avatarUrl} imgAlt="avatar" radius="none" />
      <Avatar src={avatarUrl} imgAlt="avatar" radius="small" />
      <Avatar src={avatarUrl} imgAlt="avatar" radius="medium" />
      <Avatar src={avatarUrl} imgAlt="avatar" radius="large" />
      <Avatar src={avatarUrl} imgAlt="avatar" radius="full" />
    </>
  );
};
