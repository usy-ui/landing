import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

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
    type: "flex-start | flex-end | center | space-between | space-around | space-evenly",
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
  CssSpacingPropsConst.widthProps(),
  CssSpacingPropsConst.heightProps(),
  CssSpacingPropsConst.marginProps(),
  CssSpacingPropsConst.paddingProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("flex"),
  CommonCompPropsConst.testId("flex"),
];
