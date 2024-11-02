import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  DefinedTypeProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const BadgePropsRowsConst: APIsSectionRowType[] = [
  DefinedTypeProps.variant({ defaultVal: "outline" }),
  DefinedTypeProps.size({ includeExtra: true }),
  DefinedTypeProps.color({ defaultVal: "primary" }),
  DefinedTypeProps.radius({ defaultVal: "small" }),
  {
    propName: "children",
    required: false,
    type: "ReactNode",
    defaultVal: "",
  },
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("badge"),
  CommonCompPropsConst.testId("badge"),
];
