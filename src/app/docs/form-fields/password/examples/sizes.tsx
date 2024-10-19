import { Flex, Password, usySpacing } from "@usy-ui/base";

export const Sizes = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "300px" }}
    >
      <Password label="Small" size="small" />
      <Password label="Medium" size="medium" />
      <Password label="Large" size="large" />
    </Flex>
  );
};
