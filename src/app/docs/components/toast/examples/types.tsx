"use client";
import { useMemo, useState } from "react";

import {
  Button,
  Flex,
  RadioGroup,
  Toast,
  ToastInstance,
  usySpacing,
} from "@usy-ui/base";

export const Types = () => {
  const optionsMemo = useMemo<RadioType[]>(
    () => [
      {
        id: "basic",
        label: "Basic",
        value: "basic",
      },
      {
        id: "success",
        label: "success",
        value: "success",
      },
      {
        id: "info",
        label: "info",
        value: "info",
      },
      {
        id: "warning",
        label: "warning",
        value: "warning",
      },
      {
        id: "error",
        label: "error",
        value: "error",
      },
    ],
    []
  );

  const [type, setType] = useState<RadioType>(optionsMemo[0]);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "500px" }}
    >
      <RadioGroup
        name="toast-types-radio-group"
        value={optionsMemo[0]}
        items={optionsMemo}
        onChange={(direction) => setType(direction)}
      />
      <Toast>
        {({ selfToast }) => (
          <Button
            onClick={() =>
              selfToast[type.value as keyof ToastInstance]({
                title: "Daily Meeting",
                content: "You have a daily meeting on 3:00 PM",
              })
            }
          >
            Show toast
          </Button>
        )}
      </Toast>
    </Flex>
  );
};
