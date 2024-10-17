import { Badge, Flex, usySpacing } from "@usy-ui/base";

export const Radius = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
      <Badge radius="none">none</Badge>
      <Badge radius="small">small</Badge>
      <Badge radius="medium">medium</Badge>
      <Badge radius="large">large</Badge>
      <Badge radius="full">full</Badge>
    </Flex>
  );
};
