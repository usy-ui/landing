import { Flex, Input, usySpacing } from "@usy-ui/base";

export const Size = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "300px" }}
    >
      <Input label="Small" size="small" value="A small text" />
      <Input label="Medium" size="medium" value="A medium text" />
      <Input label="Large" size="large" value="A large text" />
    </Flex>
  );
};
