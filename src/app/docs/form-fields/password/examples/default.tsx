import { Flex, Password, usySpacing } from "@usy-ui/base";

export const Default = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "300px" }}
    >
      <Password label="Password" placeholder="Typing..." />
      <Password label="Password" placeholder="Typing..." disabled />
    </Flex>
  );
};
