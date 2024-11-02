import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  DefinedTypeProps,
} from "@/components/docs/docs-content/apis-section/constants";

export const AvatarPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "url",
    required: true,
    type: "string",
    defaultVal: "",
  },
  DefinedTypeProps.size({ includeExtra: true }),
  DefinedTypeProps.color({ hasRandom: true, defaultVal: "black" }),
  DefinedTypeProps.radius({ defaultVal: "small" }),
  {
    propName: "fallback",
    required: false,
    type: "ReactNode",
    defaultVal: "A",
  },
  {
    propName: "imgAlt",
    required: false,
    type: "string",
    defaultVal: "avatar",
  },
  {
    propName: "onClick",
    required: false,
    type: "() => void",
    defaultVal: "",
  },
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("avatar"),
  CommonCompPropsConst.testId("avatar"),
];
