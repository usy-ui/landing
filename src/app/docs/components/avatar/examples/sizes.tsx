import { Avatar } from "@usy-ui/base";

import { avatarUrl } from "@/constants/mock.constants";

export const Sizes = () => {
  return (
    <>
      <Avatar src={avatarUrl} imgAlt="avatar" size="tiny" />
      <Avatar src={avatarUrl} imgAlt="avatar" size="small" />
      <Avatar src={avatarUrl} imgAlt="avatar" size="medium" />
      <Avatar src={avatarUrl} imgAlt="avatar" size="large" />
      <Avatar src={avatarUrl} imgAlt="avatar" size="huge" />
    </>
  );
};
