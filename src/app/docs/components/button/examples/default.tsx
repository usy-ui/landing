import { Button, Flex, usySpacing } from "@usy-ui/base";

export const Default = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      wrap="wrap"
      gap={usySpacing.px20}
    >
      <Button type="submit">Submit</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button noSole>No sole</Button>
    </Flex>
  );
};
