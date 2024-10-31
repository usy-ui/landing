import { Box, Flex, Scrollable, Typography, usySpacing } from "@usy-ui/base";

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
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
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
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
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
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
      </Scrollable>
    </Flex>
  );
};
