"use client";
import { useMemo } from "react";

import {
  ArrowRightIcon,
  Flex,
  globalToast,
  Select,
  SelectItemType,
  usySpacing,
} from "@usy-ui/base";

import { CodeBlock, getJsonPreset } from "@/components/common/codeblock";

import { ToastJsonStylesConst } from "../../constants";

export const Default = () => {
  const items = useMemo<SelectItemType[]>(
    () => [
      {
        id: "item-1",
        label: "Item 1",
        labelElement: (
          <>
            <ArrowRightIcon />
            &nbsp;&nbsp;Item 1
          </>
        ),
        value: "item-1",
      },
      {
        id: "item-2",
        label: "Item 2",
        labelElement: (
          <>
            <ArrowRightIcon />
            &nbsp;&nbsp;Item 2
          </>
        ),
        value: "item-2",
      },
      {
        id: "item-3",
        label: "Item 3",
        labelElement: (
          <>
            <ArrowRightIcon />
            &nbsp;&nbsp;Item 3
          </>
        ),
        value: "item-3",
      },
    ],
    []
  );

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px32}
      widthProps={{ width: "260px" }}
    >
      <Select
        items={items}
        label="Select item"
        onChange={(item) => {
          globalToast.basic({
            content: (
              <CodeBlock
                {...getJsonPreset({ ...item, labelElement: undefined })}
              />
            ),
            styles: ToastJsonStylesConst,
          });
        }}
      />
      <Select
        disabled
        items={items}
        label="Disabled select"
        onChange={(item) =>
          globalToast.basic({
            content: <CodeBlock {...getJsonPreset(item)} />,
            styles: ToastJsonStylesConst,
          })
        }
      />
    </Flex>
  );
};
