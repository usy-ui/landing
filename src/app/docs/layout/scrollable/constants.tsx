import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  DefinedTypeProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const ScrollablePropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "children",
    required: true,
    type: "ReactNode",
    defaultVal: "",
  },
  DefinedTypeProps.tag(),
  {
    propName: "scrollType",
    required: false,
    type: "vertical | horizontal | both",
    defaultVal: "vertical",
  },
  {
    propName: "showScrollOnHover",
    required: false,
    type: "boolean",
    defaultVal: "false",
  },
  CssSpacingPropsConst.widthProps(),
  CssSpacingPropsConst.heightProps(),
  CssSpacingPropsConst.marginProps(),
  CssSpacingPropsConst.paddingProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("scrollable"),
  CommonCompPropsConst.testId("scrollable"),
];
