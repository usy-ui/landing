import { Flex, Input, usySpacing } from "@usy-ui/base";

export const Type = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "300px" }}
    >
      <Input type="text" placeholder="This is a text input" />
      <Input type="number" placeholder="This is a number input" />
    </Flex>
  );
};
