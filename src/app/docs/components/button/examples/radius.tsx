import { Button, Flex, usySpacing } from "@usy-ui/base";

export const Radius = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      wrap="wrap"
      gap={usySpacing.px20}
    >
      <Button radius="none">None</Button>
      <Button radius="small">Small</Button>
      <Button radius="medium">Medium</Button>
      <Button radius="large">Large</Button>
      <Button radius="full">Full</Button>
    </Flex>
  );
};
