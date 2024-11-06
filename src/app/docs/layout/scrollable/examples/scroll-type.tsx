import { Box, Flex, Scrollable, Typography, usySpacing } from "@usy-ui/base";

import { loremIpsumParagraph1 } from "@/mock/lorem-ipsum";

export const ScrollType = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px56}
    >
      <Scrollable
        widthProps={{ maxWidth: "500px" }}
        heightProps={{ maxHeight: "200px" }}
        scrollType="vertical"
      >
        <Box>
          <Typography size="large" weight="bold">
            [Vertical] What is Lorem Ipsum?
          </Typography>
          <Typography>{loremIpsumParagraph1}</Typography>
        </Box>
      </Scrollable>
      <Scrollable
        widthProps={{ maxWidth: "500px" }}
        heightProps={{ maxHeight: "300px" }}
        scrollType="horizontal"
      >
        <Box widthProps={{ minWidth: "700px" }}>
          <Typography size="large" weight="bold">
            [Horizontal] What is Lorem Ipsum?
          </Typography>
          <Typography>{loremIpsumParagraph1}</Typography>
        </Box>
      </Scrollable>
      <Scrollable
        widthProps={{ maxWidth: "500px" }}
        heightProps={{ maxHeight: "200px" }}
        scrollType="both"
      >
        <Box widthProps={{ minWidth: "550px" }}>
          <Typography size="large" weight="bold">
            [Both] What is Lorem Ipsum?
          </Typography>
          <Typography>{loremIpsumParagraph1}</Typography>
        </Box>
      </Scrollable>
    </Flex>
  );
};
