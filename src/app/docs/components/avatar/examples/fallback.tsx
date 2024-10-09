import { Avatar } from "@usy-ui/base";

export const Fallback = () => {
  return (
    <>
      <Avatar url="" fallback="P" color="primary" />
      <Avatar url="" fallback="B" color="black" />
      <Avatar url="" fallback="A" color="amber" />
      <Avatar url="" fallback="P" color="cyan" />
      <Avatar url="" fallback="R" color="random" />
    </>
  );
};
