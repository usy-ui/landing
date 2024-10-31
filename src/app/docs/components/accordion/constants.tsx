import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/types";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";
import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/utils/get-common-comp-props-rows";
import {
  getMarginPropsRow,
  getPaddingPropsRow,
  getWidthPropsRow,
} from "@/components/docs/docs-content/apis-section/utils/get-common-css-props-rows";

export const AccordionPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "items",
    required: true,
    type: (
      <TypesPreview type={PropsTypesConst.AccordionItemType}>
        {PropsTypesConst.AccordionItemType}[]
      </TypesPreview>
    ),
    defVault: "",
  },
  getWidthPropsRow(),
  getMarginPropsRow(),
  getPaddingPropsRow(),
  ...getCommonCompPropsRows("accordion"),
];
