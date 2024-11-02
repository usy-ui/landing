import { Flex, Skeleton, usySpacing } from "@usy-ui/base";

export const Default = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "500px" }}
    >
      <Skeleton type="circle" />
      <Skeleton type="bars" numOfBars={4} />
    </Flex>
  );
};
