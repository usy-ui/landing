import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  DefinedTypeProps,
  FieldLabelPropsConst,
  FormFieldPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";

export const SwitchPropsRowsConst: APIsSectionRowType[] = [
  DefinedTypeProps.size({ defaultVal: "large" }),
  FieldLabelPropsConst.label(),
  FieldLabelPropsConst.hasAsterisk(),
  FormFieldPropsConst.value({ valueType: "boolean" }),
  FormFieldPropsConst.disabled(),
  FormFieldPropsConst.onChange({ valueType: "boolean" }),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("switch"),
  CommonCompPropsConst.testId("switch"),
];
