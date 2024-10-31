"use client";
import { useMemo, useState } from "react";

import { Flex, RadioGroup, RadioType, usySpacing } from "@usy-ui/base";

import { StyledFlex, StyledBox } from "./_styled-comps";

type WrapType = "nowrap" | "wrap" | "wrap-reverse";

export const Wrap = () => {
  const optionsMemo = useMemo<RadioType[]>(
    () => [
      {
        id: "nowrap",
        label: "nowrap",
        value: "nowrap",
      },
      {
        id: "wrap",
        label: "wrap",
        value: "wrap",
      },
      {
        id: "wrap-reverse",
        label: "wrap-reverse",
        value: "wrap-reverse",
      },
    ],
    []
  );

  const [wrap, setWrap] = useState<RadioType>(optionsMemo[0]);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px32}
    >
      <RadioGroup
        name="wrap-radio-group"
        value={wrap}
        items={optionsMemo}
        onChange={(option) => setWrap(option)}
      />
      <StyledFlex
        justifyContent="center"
        alignItems="center"
        wrap={wrap.value as WrapType}
        gap={usySpacing.px20}
        widthProps={{ maxWidth: "300px" }}
      >
        {Array(5)
          .fill("")
          .map((_, index) => (
            <StyledBox
              key={`styled-box-${index}`}
              widthProps={{ minWidth: "70px", maxWidth: "70px" }}
              heightProps={{ height: "40px" }}
            >
              {index}
            </StyledBox>
          ))}
      </StyledFlex>
    </Flex>
  );
};
