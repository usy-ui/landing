import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";

export const SkeletonPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "type",
    required: true,
    type: "circle | bars",
    defaultVal: "",
  },
  {
    propName: "numOfBars",
    required: false,
    type: "number",
    defaultVal: "1",
  },
  CssSpacingPropsConst.widthProps(),
  CssSpacingPropsConst.heightProps(),
  CssSpacingPropsConst.marginProps(),
  CssSpacingPropsConst.paddingProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("tabs"),
  CommonCompPropsConst.testId("tabs"),
];
