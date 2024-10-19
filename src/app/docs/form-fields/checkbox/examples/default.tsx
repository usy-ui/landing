"use client";
import { Checkbox, Flex, usySpacing } from "@usy-ui/base";

export const Default = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
      <Checkbox label="default" />
      <Checkbox label="disabled" disabled />
      <Checkbox
        label="onChange"
        onChange={(value) => alert(`Checked: ${value}`)}
      />
    </Flex>
  );
};
