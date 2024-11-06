import { Button, Flex, usySpacing } from "@usy-ui/base";

export const Variants = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      wrap="wrap"
      gap={usySpacing.px20}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="normal">Normal</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="invisible">Invisible</Button>
    </Flex>
  );
};
