import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/types";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";
import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/utils/get-common-comp-props-rows";

export const BoxPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "children",
    required: true,
    type: "ReactNode",
    defVault: "",
  },
  {
    propName: "tag",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseSemanticTagUnion}>
        {PropsTypesConst.BaseSemanticTagUnion}
      </TypesPreview>
    ),
    defVault: "div",
  },
  {
    propName: "id",
    required: false,
    type: "string",
    defVault: "",
  },
  {
    propName: "widthProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.WidthCSSType}>
        {PropsTypesConst.WidthCSSType}
      </TypesPreview>
    ),
    defVault: "",
  },
  {
    propName: "heightProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.HeightCSSType}>
        {PropsTypesConst.HeightCSSType}
      </TypesPreview>
    ),
    defVault: "",
  },
  {
    propName: "marginProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.MarginCSSType}>
        {PropsTypesConst.MarginCSSType}
      </TypesPreview>
    ),
    defVault: "",
  },
  {
    propName: "paddingProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.PaddingCSSType}>
        {PropsTypesConst.PaddingCSSType}
      </TypesPreview>
    ),
    defVault: "",
  },
  ...getCommonCompPropsRows("box"),
];
