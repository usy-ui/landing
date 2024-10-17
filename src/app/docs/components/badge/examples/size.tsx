import { Badge, Flex, usySpacing } from "@usy-ui/base";

export const Size = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
      <Badge size="small">small</Badge>
      <Badge size="medium">medium</Badge>
      <Badge size="large">large</Badge>
    </Flex>
  );
};
