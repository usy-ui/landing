import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  DefinedTypeProps,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const PanelPropsRowsConst: APIsSectionRowType[] = [
  FrequentlyUsedProps.children(),
  DefinedTypeProps.semanticTag(),
  {
    propName: "title",
    required: false,
    type: "ReactNode",
    defaultVal: "",
  },
  CssSpacingPropsConst.widthProps(),
  CssSpacingPropsConst.heightProps(),
  CssSpacingPropsConst.marginProps(),
  CssSpacingPropsConst.paddingProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("panel"),
  CommonCompPropsConst.testId("panel"),
];
