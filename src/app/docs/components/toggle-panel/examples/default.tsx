import { Flex, TogglePanel, Typography } from "@usy-ui/base";

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
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry is standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Typography>
      </TogglePanel>
    </Flex>
  );
};
