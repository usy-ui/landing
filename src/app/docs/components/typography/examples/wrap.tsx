import { Flex, Panel, Typography, usySpacing } from "@usy-ui/base";

export const Wrap = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
    >
      <Panel widthProps={{ maxWidth: "400px" }}>
        <Typography wrap="wrap">
          Wrap - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
        </Typography>
      </Panel>
      <Panel widthProps={{ maxWidth: "400px" }}>
        <Typography wrap="nowrap">
          Nowrap - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
        </Typography>
      </Panel>
    </Flex>
  );
};
