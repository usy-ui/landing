import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const DropdownMenuPropsRowsConst: APIsSectionRowType[] = [
  FrequentlyUsedProps.children(),
  {
    propName: "open",
    required: false,
    type: "boolean",
    defaultVal: "false",
  },
  CssSpacingPropsConst.widthProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("dropdown-menu"),
  CommonCompPropsConst.testId("dropdown-menu"),
];
