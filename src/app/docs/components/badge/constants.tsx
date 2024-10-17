import { Typography } from "@usy-ui/base";

import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/helpers/get-common-comp-props-rows";
import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/types";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";
import { PropsTypesConst } from "@/components/props-types/constants";

export const BadgePropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "variant",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseVariantUnion}>
        {PropsTypesConst.BaseVariantUnion}
      </TypesPreview>
    ),
    defVault: "outline",
  },
  {
    propName: "size",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseSizeUnion}>
        {PropsTypesConst.BaseSizeUnion}
      </TypesPreview>
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
    defVault: "primary",
  },
  {
    propName: "radius",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseRadiusUnion}>
        {PropsTypesConst.BaseRadiusUnion}
      </TypesPreview>
    ),
    defVault: "small",
  },
  {
    propName: "children",
    required: false,
    type: "ReactNode",
    defVault: "",
  },
  ...getCommonCompPropsRows("badge"),
];
