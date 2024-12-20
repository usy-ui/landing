import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  DefinedTypeProps,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const TooltipPropsRowsConst: APIsSectionRowType[] = [
  FrequentlyUsedProps.children(),
  FrequentlyUsedProps.content(),
  DefinedTypeProps.position({ defaultVal: "top" }),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("tooltip"),
  CommonCompPropsConst.testId("tooltip"),
];
