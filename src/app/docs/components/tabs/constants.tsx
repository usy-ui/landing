import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import { CommonCompPropsConst } from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const TabsPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "tabs",
    required: true,
    type: (
      <TypesPreview type={PropsTypesConst.TabItemType}>
        {PropsTypesConst.TabItemType}
      </TypesPreview>
    ),
    defaultVal: "",
  },
  {
    propName: "tabId",
    required: false,
    type: "string",
    defaultVal: "tabs[0]",
  },
  {
    propName: "willMounted",
    required: false,
    type: "boolean",
    defaultVal: "true",
  },
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("tabs"),
  CommonCompPropsConst.testId("tabs"),
];
