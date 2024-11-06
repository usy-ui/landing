import { Flex, Typography, usySpacing } from "@usy-ui/base";

import { loremIpsumParagraph1 } from "@/mock/lorem-ipsum";

export const Align = () => {
  return (
    <Flex direction="column" justifyContent="center" gap={usySpacing.px20}>
      <Typography align="left">Left - Lorem Ipsum</Typography>
      <Typography align="center">Center - Lorem Ipsum</Typography>
      <Typography align="right">Right - Lorem Ipsum</Typography>
      <Typography align="justify">Justify - {loremIpsumParagraph1}</Typography>
    </Flex>
  );
};
