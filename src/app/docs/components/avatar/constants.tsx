import { Typography } from "@usy-ui/base";

import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import { CommonCompPropsConst } from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const AvatarPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "url",
    required: true,
    type: "string",
    defaultVal: "",
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
    defaultVal: "black",
  },
  {
    propName: "radius",
    required: false,
    type: "BaseRadius",
    defaultVal: "small",
  },
  {
    propName: "fallback",
    required: false,
    type: "ReactNode",
    defaultVal: "A",
  },
  {
    propName: "imgAlt",
    required: false,
    type: "string",
    defaultVal: "avatar",
  },
  {
    propName: "onClick",
    required: false,
    type: "() => void",
    defaultVal: "",
  },
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("avatar"),
  CommonCompPropsConst.testId("avatar"),
];
