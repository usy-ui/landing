import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const ModalPropsRowsConst: APIsSectionRowType[] = [
  FrequentlyUsedProps.children(),
  {
    propName: "title",
    required: false,
    type: "string | ReactNode",
    defaultVal: "",
  },
  {
    propName: "preventOutsideClose",
    required: false,
    type: "boolean",
    defaultVal: "false",
  },
  FrequentlyUsedProps.containerElement(),
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
  CommonCompPropsConst.name("modal"),
  CommonCompPropsConst.testId("modal"),
];
