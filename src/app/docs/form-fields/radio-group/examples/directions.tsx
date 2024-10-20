"use client";
import { useMemo } from "react";

import { Flex, RadioGroup, usySpacing } from "@usy-ui/base";

export const Direction = () => {
  const items = useMemo(
    () => [
      { id: "item-1", label: "Item 1", value: "item-1" },
      { id: "item-2", label: "Item 2", value: "item-2" },
      { id: "item-3", label: "Item 3", value: "item-3" },
    ],
    []
  );

  return (
    <Flex
      direction="column"
      justifyContent="center"
      gap={usySpacing.px32}
      widthProps={{ maxWidth: "250px" }}
      marginProps={{ margin: "auto" }}
    >
      <RadioGroup
        name="horizontal-option"
        label="Horizontal option"
        direction="horizontal"
        items={items}
      />
      <RadioGroup
        name="vertical-option"
        label="Vertical option"
        direction="vertical"
        items={items}
      />
    </Flex>
  );
};
