import { Button, Flex, Tooltip, usySpacing } from "@usy-ui/base";

export const Positions = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "500px" }}
    >
      <Tooltip content="A top alignment" position="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="A right alignment" position="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip content="A bottom alignment" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="A left alignment" position="left">
        <Button>Left</Button>
      </Tooltip>
    </Flex>
  );
};
