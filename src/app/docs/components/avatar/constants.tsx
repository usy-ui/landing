import { Typography } from "@usy-ui/base";

import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/types";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";
import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/utils/get-common-comp-props-rows";

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
    type: (
      <>
        <TypesPreview type={PropsTypesConst.BaseSizeUnion}>
          {PropsTypesConst.BaseSizeUnion}
        </TypesPreview>
        {" | "}
        <TypesPreview type={PropsTypesConst.BaseSizeExtraUnion}>
          {PropsTypesConst.BaseSizeExtraUnion}
        </TypesPreview>
      </>
    ),
    defVault: "medium",
  },
  {
    propName: "color",
    required: false,
    type: (
      <>
        <TypesPreview type={PropsTypesConst.BaseColorUnion}>
          {PropsTypesConst.BaseColorUnion}
        </TypesPreview>
        {" | "}
        <Typography size="small">random</Typography>
      </>
    ),
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
