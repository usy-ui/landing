import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/helpers/get-common-comp-props-rows";
import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/types";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";
import { PropsTypesConst } from "@/components/props-types/constants";

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
  ...getCommonCompPropsRows("accordion"),
];
