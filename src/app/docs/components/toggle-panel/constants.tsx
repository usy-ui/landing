import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const TogglePanelPropsRowsConst: APIsSectionRowType[] = [
  FrequentlyUsedProps.children(),
  {
    propName: "title",
    required: false,
    type: "string | ReactNode",
    defaultVal: "",
  },
  {
    propName: "isExpand",
    required: false,
    type: "boolean",
    defaultVal: "false",
  },
  {
    propName: "onToggle",
    required: false,
    type: "(isExpand: boolean) => void",
    defaultVal: "",
  },
  CssSpacingPropsConst.widthProps(),
  CssSpacingPropsConst.marginProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("toggle-panel"),
  CommonCompPropsConst.testId("toggle-panel"),
];
