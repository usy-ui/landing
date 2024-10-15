"use client";

import { Tooltip, Typography } from "@usy-ui/base";

import { CompApisRowType } from "@/components/docs/docs-content/apis-section";
import { getCommonCompApiRows } from "@/components/docs/docs-content/apis-section/constants";

export const specApiDataRows: CompApisRowType[] = [
  {
    propName: "items",
    required: true,
    type: "AccordionItemType[]",
    defVault: "",
  },
  {
    propName: "widthProps",
    required: false,
    type: (
      <Tooltip content="aaa">
        <Typography size="small" color="blue">
          WidthCSS
        </Typography>
      </Tooltip>
    ),
    defVault: "",
  },
  {
    propName: "marginProps",
    required: false,
    type: "MarginCSS",
    defVault: "",
  },
  {
    propName: "paddingProps",
    required: false,
    type: "PaddingCSS",
    defVault: "",
  },
  ...getCommonCompApiRows("accordion"),
];
