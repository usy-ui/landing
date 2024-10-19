import { CloseIcon, EnvelopeIcon, Flex, Input, usySpacing } from "@usy-ui/base";

export const Icon = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "300px" }}
    >
      <Input label="Icon left" iconLeft={<EnvelopeIcon />} />
      <Input label="Icon right" iconRight={<CloseIcon />} />
    </Flex>
  );
};
