import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/types";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";
import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/utils/get-common-comp-props-rows";
import {
  getHeightPropsRow,
  getMarginPropsRow,
  getPaddingPropsRow,
  getWidthPropsRow,
} from "@/components/docs/docs-content/apis-section/utils/get-common-css-props-rows";

export const ScrollablePropsRowsConst: APIsSectionRowType[] = [
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
    propName: "scrollType",
    required: false,
    type: "vertical | horizontal | both",
    defVault: "vertical",
  },
  {
    propName: "showScrollOnHover",
    required: false,
    type: "boolean",
    defVault: "false",
  },
  getWidthPropsRow(),
  getHeightPropsRow(),
  getMarginPropsRow(),
  getPaddingPropsRow(),
  ...getCommonCompPropsRows("scrollable"),
];
