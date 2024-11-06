import { Flex, Typography, usySpacing } from "@usy-ui/base";

export const Sizes = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
    >
      <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
        <Typography size="small">small</Typography>
        <Typography size="medium">medium</Typography>
        <Typography size="large">large</Typography>
      </Flex>
      <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
        <Typography size="tiny">tiny</Typography>
        <Typography size="huge">huge</Typography>
      </Flex>
      <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
        <Typography size="gigant-1">gigant-1</Typography>
        <Typography size="gigant-2">gigant-2</Typography>
      </Flex>
    </Flex>
  );
};
