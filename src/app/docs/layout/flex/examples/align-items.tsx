"use client";
import { useMemo, useState } from "react";

import {
  Flex,
  FlexProps,
  RadioGroup,
  RadioType,
  usySpacing,
} from "@usy-ui/base";

import { StyledFlex, StyledBox } from "./_styled-comps";

type AlignItemType = FlexProps["alignItems"];

export const AlignItems = () => {
  const optionsMemo = useMemo<RadioType[]>(
    () => [
      {
        id: "flex-start",
        label: "flex-start",
        value: "flex-start",
      },
      {
        id: "center",
        label: "center",
        value: "center",
      },
      {
        id: "flex-end",
        label: "flex-end",
        value: "flex-end",
      },
      {
        id: "baseline",
        label: "baseline",
        value: "baseline",
      },
      {
        id: "stretch",
        label: "stretch",
        value: "stretch",
      },
    ],
    []
  );

  const [alignItem, setAlignItem] = useState<RadioType>(optionsMemo[0]);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px32}
    >
      <RadioGroup
        name="align-items-radio-group"
        value={alignItem}
        items={optionsMemo}
        onChange={(option) => setAlignItem(option)}
      />
      <StyledFlex
        justifyContent="center"
        alignItems={alignItem.value as AlignItemType}
        gap={usySpacing.px20}
        heightProps={{ height: "120px" }}
      >
        <StyledBox
          widthProps={{ width: "70px" }}
          heightProps={{
            height: alignItem.value !== "stretch" ? "60px" : undefined,
          }}
        >
          0
        </StyledBox>
        <StyledBox
          widthProps={{ width: "70px" }}
          heightProps={{
            height: alignItem.value !== "stretch" ? "40px" : undefined,
          }}
        >
          1
        </StyledBox>
        <StyledBox
          widthProps={{ width: "70px" }}
          heightProps={{
            height: alignItem.value !== "stretch" ? "80px" : undefined,
          }}
        >
          2
        </StyledBox>
      </StyledFlex>
    </Flex>
  );
};
