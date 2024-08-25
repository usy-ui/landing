"use client";
import { CompApiPropsRowType } from "@/components/docs/comp-api";
import { getCommonCompApiRows } from "@/components/docs/comp-api/comp-api.constants";

export const specApiDataRows: CompApiPropsRowType[] = [
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