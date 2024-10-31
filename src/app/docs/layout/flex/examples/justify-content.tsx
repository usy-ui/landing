"use client";
import { useMemo, useState } from "react";

import { Flex, RadioGroup, RadioType, usySpacing } from "@usy-ui/base";

import { StyledFlex, StyledBox } from "./_styled-comps";

type JustifyContentType =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export const JustifyContent = () => {
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

  const [justifyContent, setJustifyContent] = useState<RadioType>(
    optionsMemo[0]
  );

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px32}
    >
      <RadioGroup
        name="justify-content-radio-group"
        value={justifyContent}
        items={optionsMemo}
        onChange={(option) => setJustifyContent(option)}
      />
      <StyledFlex
        justifyContent={justifyContent.value as JustifyContentType}
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
