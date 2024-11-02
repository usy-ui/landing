import { Flex, TextArea, usySpacing } from "@usy-ui/base";

export const Default = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
    >
      <TextArea
        label="About Me"
        placeholder="Typing..."
        widthProps={{ width: "460px" }}
        heightProps={{ height: "140px" }}
      />
      <TextArea
        label="Disabled About Me"
        placeholder="Typing..."
        widthProps={{ width: "460px" }}
        heightProps={{ height: "140px" }}
        disabled
      />
    </Flex>
  );
};
