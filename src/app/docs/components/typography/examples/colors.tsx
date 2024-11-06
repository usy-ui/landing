import { Flex, Typography, usySpacing } from "@usy-ui/base";

export const Colors = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
      <Typography color="primary">primary</Typography>
      <Typography color="blue">blue</Typography>
      <Typography color="grass">grass</Typography>
      <Typography color="light-5">light-5</Typography>
      <Typography color="dark-5">dark-5</Typography>
      <Typography color="random">random</Typography>
    </Flex>
  );
};
