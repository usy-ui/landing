import { Typography } from "@usy-ui/base";

import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import { CommonCompPropsConst } from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const BadgePropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "variant",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseVariantUnion}>
        {PropsTypesConst.BaseVariantUnion}
      </TypesPreview>
    ),
    defaultVal: "outline",
  },
  {
    propName: "size",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseSizeUnion}>
        {PropsTypesConst.BaseSizeUnion}
      </TypesPreview>
    ),
    defaultVal: "medium",
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
    defaultVal: "primary",
  },
  {
    propName: "radius",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseRadiusUnion}>
        {PropsTypesConst.BaseRadiusUnion}
      </TypesPreview>
    ),
    defaultVal: "small",
  },
  {
    propName: "children",
    required: false,
    type: "ReactNode",
    defaultVal: "",
  },
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("badge"),
  CommonCompPropsConst.testId("badge"),
];
