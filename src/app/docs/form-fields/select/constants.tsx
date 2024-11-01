import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  FieldLabelPropsConst,
  FormFieldPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const SelectPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "items",
    required: true,
    type: (
      <TypesPreview type={PropsTypesConst.SelectItemType}>
        {PropsTypesConst.SelectItemType}[]
      </TypesPreview>
    ),
    defaultVal: "",
  },
  {
    propName: "isOpen",
    required: false,
    type: "boolean",
    defaultVal: "false",
  },
  FieldLabelPropsConst.label(),
  FieldLabelPropsConst.hasAsterisk(),
  FormFieldPropsConst.value({ valueType: PropsTypesConst.SelectItemType }),
  FormFieldPropsConst.disabled(),
  FormFieldPropsConst.onChange({ valueType: PropsTypesConst.SelectItemType }),
  CssSpacingPropsConst.widthProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("select"),
  CommonCompPropsConst.testId("select"),
];
