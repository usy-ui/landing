import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/types";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";
import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/utils/get-common-comp-props-rows";

export const FlexPropsRowsConst: APIsSectionRowType[] = [
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
    propName: "display",
    required: false,
    type: "flex | inline-flex",
    defVault: "flex",
  },
  {
    propName: "direction",
    required: false,
    type: "row | column | row-reverse | column-reverse",
    defVault: "",
  },
  {
    propName: "justifyContent",
    required: false,
    type: "flex-start | flex-end | center | space-between",
    defVault: "",
  },
  {
    propName: "alignItems",
    required: false,
    type: "flex-start | flex-end | center | baseline | stretch",
    defVault: "",
  },
  {
    propName: "wrap",
    required: false,
    type: "nowrap | wrap | wrap-reverse",
    defVault: "",
  },
  {
    propName: "grow",
    required: false,
    type: "number",
    defVault: "",
  },
  {
    propName: "shrink",
    required: false,
    type: "number",
    defVault: "",
  },
  {
    propName: "gap",
    required: false,
    type: "string",
    defVault: "",
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
  ...getCommonCompPropsRows("flex"),
];
