"use client";

import { CompApisRowType } from "@/components/docs/component/comp-apis-section";
import { getCommonCompApiRows } from "@/components/docs/component/comp-apis-section/constants";

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
