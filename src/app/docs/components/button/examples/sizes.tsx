import { Button, Flex, usySpacing } from "@usy-ui/base";

export const Sizes = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      wrap="wrap"
      gap={usySpacing.px20}
    >
      <Button size="tiny">Tiny</Button>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Flex>
  );
};
