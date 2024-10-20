"use client";
import { useMemo } from "react";

import { Flex, RadioGroup, rootToast, usySpacing } from "@usy-ui/base";

import { CodeBlock, getJsonPreset } from "@/components/common/codeblock";

import { ToastJsonStylesConst } from "../../constants";

export const Default = () => {
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
      alignItems="center"
      gap={usySpacing.px32}
    >
      <RadioGroup
        name="select-option"
        label="Select option"
        items={items}
        onChange={(item) =>
          rootToast.basic({
            content: <CodeBlock {...getJsonPreset(item)} />,
            styles: ToastJsonStylesConst,
          })
        }
      />
      <RadioGroup
        name="disabled-option"
        label="Disabled option"
        items={items}
        disabled
        onChange={(item) =>
          rootToast.basic({
            content: <CodeBlock {...getJsonPreset(item)} />,
            styles: ToastJsonStylesConst,
          })
        }
      />
    </Flex>
  );
};
