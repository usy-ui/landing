import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section";
import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/helpers/get-common-comp-props-rows";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const AccordionPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "items",
    required: true,
    type: (
      <TypesPreview type="AccordionItemType">AccordionItemType[]</TypesPreview>
    ),
    defVault: "",
  },
  {
    propName: "widthProps",
    required: false,
    type: <TypesPreview type="WidthCSSType">WidthCSSType</TypesPreview>,
    defVault: "",
  },
  {
    propName: "marginProps",
    required: false,
    type: <TypesPreview type="MarginCSSType">MarginCSSType</TypesPreview>,
    defVault: "",
  },
  {
    propName: "paddingProps",
    required: false,
    type: <TypesPreview type="PaddingCSSType">PaddingCSSType</TypesPreview>,
    defVault: "",
  },
  ...getCommonCompPropsRows("accordion"),
];
