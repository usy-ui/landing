import { Button, Flex, Popover, usySpacing } from "@usy-ui/base";

export const Positions = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px32}
      widthProps={{ maxWidth: "500px" }}
    >
      <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
        <Popover content="A top alignment" position="top-start">
          <Button>Top Start</Button>
        </Popover>
        <Popover content="A top alignment" position="top">
          <Button>Top</Button>
        </Popover>
        <Popover content="A top alignment" position="top-end">
          <Button>Top End</Button>
        </Popover>
      </Flex>
      <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
        <Popover content="A bottom alignment" position="bottom-start">
          <Button>Bottom Start</Button>
        </Popover>
        <Popover content="A bottom alignment" position="bottom">
          <Button>Bottom</Button>
        </Popover>
        <Popover content="A bottom alignment" position="bottom-end">
          <Button>Bottom End</Button>
        </Popover>
      </Flex>
      <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
        <Popover content="A left alignment" position="left">
          <Button>Left</Button>
        </Popover>
        <Popover content="A right alignment" position="right">
          <Button>Right</Button>
        </Popover>
      </Flex>
    </Flex>
  );
};
