import { Avatar } from "@usy-ui/base";

import { avatarUrl } from "@/constants/mock.constants";

export const Size = () => {
  return (
    <>
      <Avatar url={avatarUrl} imgAlt="avatar" size="tiny" />
      <Avatar url={avatarUrl} imgAlt="avatar" size="small" />
      <Avatar url={avatarUrl} imgAlt="avatar" size="medium" />
      <Avatar url={avatarUrl} imgAlt="avatar" size="large" />
      <Avatar url={avatarUrl} imgAlt="avatar" size="huge" />
    </>
  );
};
