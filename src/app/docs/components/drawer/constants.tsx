import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const DrawerPropsRowsConst: APIsSectionRowType[] = [
  FrequentlyUsedProps.children(),
  {
    propName: "side",
    required: false,
    type: "left | right",
    defaultVal: "right",
  },
  {
    propName: "header",
    required: false,
    type: "ReactNode",
    defaultVal: "",
  },
  {
    propName: "footer",
    required: false,
    type: "ReactNode",
    defaultVal: "",
  },
  {
    propName: "preventOutsideClose",
    required: false,
    type: "boolean",
    defaultVal: "false",
  },
  {
    propName: "containerElement",
    required: false,
    type: "HTMLElement",
    defaultVal: "",
  },
  {
    propName: "zIndex",
    required: false,
    type: "number",
    defaultVal: "400",
  },
  {
    propName: "onClose",
    required: false,
    type: "() => void",
    defaultVal: "",
  },
  CssSpacingPropsConst.widthProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("drawer"),
  CommonCompPropsConst.testId("drawer"),
];
