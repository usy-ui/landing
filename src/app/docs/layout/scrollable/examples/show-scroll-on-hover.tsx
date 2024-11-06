import { Box, Scrollable, Typography } from "@usy-ui/base";

import { loremIpsumParagraph1 } from "@/mock/lorem-ipsum";

export const ShowScrollOnHover = () => {
  return (
    <Scrollable
      widthProps={{ maxWidth: "500px" }}
      heightProps={{ maxHeight: "200px" }}
      scrollType="vertical"
      showScrollOnHover
    >
      <Box>
        <Typography size="large" weight="bold">
          [Vertical] What is Lorem Ipsum?
        </Typography>
        <Typography>{loremIpsumParagraph1}</Typography>
      </Box>
    </Scrollable>
  );
};
