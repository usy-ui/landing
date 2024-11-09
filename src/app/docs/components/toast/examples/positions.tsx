"use client";
import { useMemo, useState } from "react";

import { Button, Flex, RadioGroup, Toast, usySpacing } from "@usy-ui/base";

export const Positions = () => {
  const positionOptionsMemo = useMemo<RadioType[]>(
    () => [
      {
        id: "top-start",
        label: "Top start",
        value: "top-start",
      },
      {
        id: "top-end",
        label: "Top end",
        value: "top-end",
      },
      {
        id: "bottom-start",
        label: "Bottom start",
        value: "bottom-start",
      },
      {
        id: "bottom-end",
        label: "Bottom end",
        value: "bottom-end",
      },
    ],
    []
  );

  const [position, setPosition] = useState<RadioType>(positionOptionsMemo[0]);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
      widthProps={{ maxWidth: "500px" }}
    >
      <RadioGroup
        name="toast-positions-radio-group"
        value={positionOptionsMemo[0]}
        items={positionOptionsMemo}
        onChange={(direction) => setPosition(direction)}
      />
      <Toast position={position.value as BasePositionExtraUnion}>
        {({ selfToast }) => (
          <Button
            onClick={() =>
              selfToast.basic({ content: "A self toast was shown" })
            }
          >
            Show toast
          </Button>
        )}
      </Toast>
    </Flex>
  );
};
