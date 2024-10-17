import { Badge, Flex, usySpacing } from "@usy-ui/base";

export const Color = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
      <Badge color="primary">primary</Badge>
      <Badge color="light-5">light-5</Badge>
      <Badge color="dark-5">dark-5</Badge>
      <Badge color="blue">blue</Badge>
      <Badge color="green">green</Badge>
      <Badge color="random">random</Badge>
    </Flex>
  );
};
