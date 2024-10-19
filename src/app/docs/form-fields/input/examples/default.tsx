import { Flex, Input, usySpacing } from "@usy-ui/base";

export const Default = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "300px" }}
    >
      <Input
        label="Card Name"
        placeholder="JOHN DOE"
        description="Your card name must be in uppercase"
      />
      <Input label="Disabled" placeholder="Typing..." disabled />
    </Flex>
  );
};
