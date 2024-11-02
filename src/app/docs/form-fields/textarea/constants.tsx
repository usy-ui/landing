import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  FieldLabelPropsConst,
  FormFieldPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";

export const TextAreaPropsRowsConst: APIsSectionRowType[] = [
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
  FormFieldPropsConst.value({ valueType: "string" }),
  FormFieldPropsConst.disabled(),
  FormFieldPropsConst.hasError(),
  FormFieldPropsConst.onChange({ valueType: "string" }),
  FormFieldPropsConst.onBlur({ valueType: "string" }),
  CssSpacingPropsConst.widthProps(),
  CssSpacingPropsConst.heightProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("textarea"),
  CommonCompPropsConst.testId("textarea"),
];
