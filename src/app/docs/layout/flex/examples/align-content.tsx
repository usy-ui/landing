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

type AlignContentType = FlexProps["alignContent"];

export const AlignContent = () => {
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
        id: "stretch",
        label: "stretch",
        value: "stretch",
      },
      {
        id: "space-between",
        label: "space-between",
        value: "space-between",
      },
      {
        id: "space-around",
        label: "space-around",
        value: "space-around",
      },
      {
        id: "space-evenly",
        label: "space-evenly",
        value: "space-evenly",
      },
    ],
    []
  );

  const [alignContent, setAlignContent] = useState<RadioType>(optionsMemo[0]);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px32}
    >
      <RadioGroup
        name="align-content-radio-group"
        value={alignContent}
        items={optionsMemo}
        onChange={(option) => setAlignContent(option)}
      />
      <StyledFlex
        alignContent={alignContent.value as AlignContentType}
        gap={usySpacing.px20}
        wrap="wrap"
        widthProps={{ maxWidth: "400px" }}
        heightProps={{ height: "220px" }}
      >
        {Array(5)
          .fill("")
          .map((_, index) => (
            <StyledBox
              key={`styled-box-${index}`}
              widthProps={{ minWidth: "70px", maxWidth: "70px" }}
              heightProps={{
                height: alignContent.value !== "stretch" ? "40px" : undefined,
              }}
            >
              {index}
            </StyledBox>
          ))}
      </StyledFlex>
    </Flex>
  );
};
