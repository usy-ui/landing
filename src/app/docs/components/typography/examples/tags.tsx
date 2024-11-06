import { Flex, Typography, usySpacing } from "@usy-ui/base";

export const Tags = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
    >
      <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
        <Typography tag="small">small</Typography>
        <Typography tag="label">label</Typography>
        <Typography tag="span">span</Typography>
        <Typography tag="p">p</Typography>
      </Flex>
      <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
        <Typography tag="h1">h1</Typography>
        <Typography tag="h2">h2</Typography>
        <Typography tag="h3">h3</Typography>
        <Typography tag="h4">h4</Typography>
        <Typography tag="h5">h5</Typography>
        <Typography tag="h6">h6</Typography>
      </Flex>
      <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
        <Typography tag="mark">mark</Typography>
        <Typography tag="ins">ins</Typography>
        <Typography tag="del">del</Typography>
        <Typography tag="sub">sub</Typography>
        <Typography tag="sup">sup</Typography>
        <Typography tag="em">em</Typography>
        <Typography tag="strong">strong</Typography>
      </Flex>
    </Flex>
  );
};
