import { ArrowRightIcon, Button, Flex, usySpacing } from "@usy-ui/base";

export const Icons = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      wrap="wrap"
      gap={usySpacing.px20}
    >
      <Button iconLeft={<ArrowRightIcon />}>Icon</Button>
      <Button iconRight={<ArrowRightIcon />}>Icon</Button>
    </Flex>
  );
};
