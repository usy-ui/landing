import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";
import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/utils/get-common-comp-props-rows";
import {
  getHeightPropsRow,
  getMarginPropsRow,
  getPaddingPropsRow,
  getWidthPropsRow,
} from "@/components/docs/docs-content/apis-section/utils/get-common-css-props-rows";

export const PanelPropsRowsConst: APIsSectionRowType[] = [
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
    propName: "title",
    required: false,
    type: "ReactNode",
    defVault: "",
  },
  getWidthPropsRow(),
  getHeightPropsRow(),
  getMarginPropsRow(),
  getPaddingPropsRow(),
  ...getCommonCompPropsRows("panel"),
];
