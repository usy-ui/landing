"use client";

import { CompApisRowType } from "@/components/docs/component/comp-apis-section";
import { getCommonCompApiRows } from "@/components/docs/component/comp-apis-section/constants";

export const specApiDataRows: CompApisRowType[] = [
  {
    propName: "url",
    required: true,
    type: "string",
    defVault: "",
  },
  {
    propName: "size",
    required: false,
    type: "BaseSize | BaseExtraSize",
    defVault: "medium",
  },
  {
    propName: "color",
    required: false,
    type: `BaseColor | random`,
    defVault: "black",
  },
  {
    propName: "radius",
    required: false,
    type: "BaseRadius",
    defVault: "small",
  },
  {
    propName: "fallback",
    required: false,
    type: "ReactNode",
    defVault: "A",
  },
  {
    propName: "imgAlt",
    required: false,
    type: "string",
    defVault: "avatar",
  },
  {
    propName: "onClick",
    required: false,
    type: "() => void",
    defVault: "",
  },
  ...getCommonCompApiRows("avatar"),
];
