import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  DefinedTypeProps,
  FieldLabelPropsConst,
  FormFieldPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";

export const InputPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "type",
    required: false,
    type: "text | number",
    defaultVal: "text",
  },
  DefinedTypeProps.size(),
  {
    propName: "iconLeft",
    required: false,
    type: "ReactNode",
    defaultVal: "",
  },
  {
    propName: "iconRight",
    required: false,
    type: "ReactNode",
    defaultVal: "",
  },
  {
    propName: "placeholder",
    required: false,
    type: "string",
    defaultVal: "",
  },
  {
    propName: "description",
    required: false,
    type: "string",
    defaultVal: "",
  },
  {
    propName: "transformOnChange",
    required: false,
    type: "(value: string) => void",
    defaultVal: "",
  },
  {
    propName: "transformOnBlur",
    required: false,
    type: "(value: string) => void",
    defaultVal: "",
  },
  FieldLabelPropsConst.label(),
  FieldLabelPropsConst.hasAsterisk(),
  FormFieldPropsConst.disabled(),
  FormFieldPropsConst.hasError(),
  FormFieldPropsConst.onChange({ valueType: "string" }),
  FormFieldPropsConst.onBlur({ valueType: "string" }),
  CssSpacingPropsConst.widthProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("input"),
  CommonCompPropsConst.testId("input"),
];
