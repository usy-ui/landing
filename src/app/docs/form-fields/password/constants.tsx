import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  DefinedTypeProps,
  FieldLabelPropsConst,
  FormFieldPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";

export const PasswordPropsRowsConst: APIsSectionRowType[] = [
  DefinedTypeProps.size(),
  {
    propName: "iconLeft",
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
  FieldLabelPropsConst.label(),
  FieldLabelPropsConst.hasAsterisk(),
  FormFieldPropsConst.disabled(),
  FormFieldPropsConst.hasError(),
  FormFieldPropsConst.onChange({ valueType: "string" }),
  FormFieldPropsConst.onBlur({ valueType: "string" }),
  CssSpacingPropsConst.widthProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("password"),
  CommonCompPropsConst.testId("password"),
];
