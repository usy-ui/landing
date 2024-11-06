import { Flex, Typography, usySpacing } from "@usy-ui/base";

export const Weight = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
      <Typography weight="thin">thin</Typography>
      <Typography weight="light">light</Typography>
      <Typography weight="semilight">semilight</Typography>
      <Typography weight="normal">normal</Typography>
      <Typography weight="semibold">semibold</Typography>
      <Typography weight="bold">bold</Typography>
      <Typography weight="heavy">heavy</Typography>
    </Flex>
  );
};
