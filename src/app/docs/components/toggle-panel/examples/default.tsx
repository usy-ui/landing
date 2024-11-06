import { Flex, TogglePanel, Typography } from "@usy-ui/base";

import { loremIpsumParagraph1 } from "@/mock/lorem-ipsum";

export const Default = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="flex-start"
      heightProps={{ height: "300px" }}
    >
      <TogglePanel
        title="What is Lorem Ipsum?"
        widthProps={{ maxWidth: "500px" }}
      >
        <Typography>{loremIpsumParagraph1}</Typography>
      </TogglePanel>
    </Flex>
  );
};
