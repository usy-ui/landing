import { Avatar } from "@usy-ui/base";

export const Fallback = () => {
  return (
    <>
      <Avatar src="" fallback="P" color="primary" />
      <Avatar src="" fallback="B" color="black" />
      <Avatar src="" fallback="A" color="amber" />
      <Avatar src="" fallback="P" color="cyan" />
      <Avatar src="" fallback="R" color="random" />
    </>
  );
};
