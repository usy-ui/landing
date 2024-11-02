import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  DefinedTypeProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const CopyablePropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "text",
    required: true,
    type: "string",
    defaultVal: "",
  },
  DefinedTypeProps.color({ defaultVal: "primary-dark" }),
  CssSpacingPropsConst.widthProps(),
  CssSpacingPropsConst.marginProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("copyable"),
  CommonCompPropsConst.testId("copyable"),
];
