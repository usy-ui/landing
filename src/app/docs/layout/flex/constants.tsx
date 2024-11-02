import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  DefinedTypeProps,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const FlexPropsRowsConst: APIsSectionRowType[] = [
  FrequentlyUsedProps.children(),
  DefinedTypeProps.tag(),
  {
    propName: "display",
    required: false,
    type: "flex | inline-flex",
    defaultVal: "flex",
  },
  {
    propName: "direction",
    required: false,
    type: "row | column | row-reverse | column-reverse",
    defaultVal: "",
  },
  {
    propName: "justifyContent",
    required: false,
    type: "flex-start | flex-end | center | space-between | space-around | space-evenly",
    defaultVal: "",
  },
  {
    propName: "alignItems",
    required: false,
    type: "flex-start | flex-end | center | baseline | stretch",
    defaultVal: "",
  },
  {
    propName: "wrap",
    required: false,
    type: "nowrap | wrap | wrap-reverse",
    defaultVal: "",
  },
  {
    propName: "gap",
    required: false,
    type: "string",
    defaultVal: "",
  },
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
  CommonCompPropsConst.name("flex"),
  CommonCompPropsConst.testId("flex"),
];
