"use client";
import { Button, Flex, globalToast, Toast, usySpacing } from "@usy-ui/base";

export const Default = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "500px" }}
    >
      <Button
        onClick={() => globalToast.basic({ content: "A root toast was shown" })}
      >
        Root toast
      </Button>
      <Toast position="bottom-end">
        {({ selfToast }) => (
          <Button
            onClick={() =>
              selfToast.basic({
                title: "Daily Meeting",
                content: "You have a daily meeting on 3:00 PM",
              })
            }
          >
            Self toast
          </Button>
        )}
      </Toast>
    </Flex>
  );
};
