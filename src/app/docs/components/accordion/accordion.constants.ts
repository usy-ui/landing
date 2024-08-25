"use client";
import { CompApiPropsRowType } from "@/components/docs/comp-api";
import { getCommonCompApiRows } from "@/components/docs/comp-api/comp-api.constants";

export const specApiDataRows: CompApiPropsRowType[] = [
  {
    propName: "items",
    required: true,
    type: "AccordionItemType[]",
    defVault: "",
  },
  {
    propName: "widthProps",
    required: false,
    type: "WidthCSS",
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
