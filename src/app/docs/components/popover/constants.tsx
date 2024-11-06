import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  DefinedTypeProps,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const PopoverPropsRowsConst: APIsSectionRowType[] = [
  FrequentlyUsedProps.children(),
  FrequentlyUsedProps.content(),
  DefinedTypeProps.position({ includeExtra: true, defaultVal: "bottom" }),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("popover"),
  CommonCompPropsConst.testId("popover"),
];
