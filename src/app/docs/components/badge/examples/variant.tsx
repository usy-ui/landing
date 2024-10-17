import { Badge, Flex, usySpacing } from "@usy-ui/base";

export const Variant = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
      <Badge variant="filled">filled</Badge>
      <Badge variant="outline">outline</Badge>
    </Flex>
  );
};
