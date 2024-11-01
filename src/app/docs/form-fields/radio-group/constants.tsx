import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  FieldLabelPropsConst,
  FormFieldPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const RadioGroupPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "items",
    required: true,
    type: (
      <TypesPreview type={PropsTypesConst.RadioType}>
        {PropsTypesConst.RadioType}[]
      </TypesPreview>
    ),
    defaultVal: "",
  },
  {
    propName: "direction",
    required: false,
    type: "vertical | horizontal",
    defaultVal: "horizontal",
  },
  FieldLabelPropsConst.label(),
  FormFieldPropsConst.disabled(),
  FormFieldPropsConst.value({
    valueType: PropsTypesConst.RadioType,
    defaultVal: "items[0]",
  }),
  FormFieldPropsConst.onChange({ valueType: PropsTypesConst.RadioType }),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("radio-group"),
  CommonCompPropsConst.testId("radio-group"),
];
