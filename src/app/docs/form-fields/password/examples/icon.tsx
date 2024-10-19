import { Flex, LabelIcon, Password, usySpacing } from "@usy-ui/base";

export const Icon = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "300px" }}
    >
      <Password label="Icon left" iconLeft={<LabelIcon />} />
    </Flex>
  );
};
