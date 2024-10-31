"use client";
import { useMemo, useState } from "react";

import { Flex, RadioGroup, RadioType, usySpacing } from "@usy-ui/base";

import { StyledFlex, StyledBox } from "./_styled-comps";

type DirectionType = "row" | "column" | "row-reverse" | "column-reverse";

export const Directions = () => {
  const directionOptionsMemo = useMemo<RadioType[]>(
    () => [
      {
        id: "row",
        label: "row",
        value: "row",
      },
      {
        id: "column",
        label: "column",
        value: "column",
      },
      {
        id: "row-reverse",
        label: "row-reverse",
        value: "row-reverse",
      },
      {
        id: "column-reverse",
        label: "column-reverse",
        value: "column-reverse",
      },
    ],
    []
  );

  const [direction, setDirection] = useState<RadioType>(
    directionOptionsMemo[0]
  );

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px32}
    >
      <RadioGroup
        name="direction-radio-group"
        value={directionOptionsMemo[0]}
        items={directionOptionsMemo}
        onChange={(direction) => setDirection(direction)}
      />
      <StyledFlex
        direction={direction.value as DirectionType}
        justifyContent="center"
        alignItems="center"
        gap={usySpacing.px20}
      >
        {Array(3)
          .fill("")
          .map((_, index) => (
            <StyledBox
              key={`styled-box-${index}`}
              widthProps={{ width: "70px" }}
              heightProps={{ height: "40px" }}
            >
              {index}
            </StyledBox>
          ))}
      </StyledFlex>
    </Flex>
  );
};
