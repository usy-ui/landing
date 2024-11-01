import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  FieldLabelPropsConst,
  FormFieldPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";

export const CheckboxPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "checked",
    required: false,
    type: "boolean",
    defaultVal: "false",
  },
  FieldLabelPropsConst.label(),
  FormFieldPropsConst.disabled(),
  FormFieldPropsConst.onChange({ valueType: "boolean" }),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("checkbox"),
  CommonCompPropsConst.testId("checkbox"),
];
