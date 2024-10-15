"use client";

import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section";
import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/helpers/get-common-comp-props-rows";

export const AvatarPropsRowsConst: APIsSectionRowType[] = [
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
  ...getCommonCompPropsRows("avatar"),
];
