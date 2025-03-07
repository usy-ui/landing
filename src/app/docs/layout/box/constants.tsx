import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  DefinedTypeProps,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const BoxPropsRowsConst: APIsSectionRowType[] = [
  FrequentlyUsedProps.children(),
  DefinedTypeProps.semanticTag(),
  {
    propName: "id",
    required: false,
    type: "string",
    defaultVal: "",
  },
  CssSpacingPropsConst.widthProps(),
  CssSpacingPropsConst.heightProps(),
  CssSpacingPropsConst.marginProps(),
  CssSpacingPropsConst.paddingProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("box"),
  CommonCompPropsConst.testId("box"),
];
