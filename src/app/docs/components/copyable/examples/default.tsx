import { Copyable, Flex, usySpacing } from "@usy-ui/base";

export const Default = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
    >
      <Copyable text="npm i @usy-ui/base" widthProps={{ width: "250px" }} />
      <Copyable
        text="npm i @usy-ui/base"
        widthProps={{ width: "250px" }}
        color="dark-5"
      />
      <Copyable
        text="npm i @usy-ui/base"
        widthProps={{ width: "250px" }}
        color="blue"
      />
    </Flex>
  );
};
