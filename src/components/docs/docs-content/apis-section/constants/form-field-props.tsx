import { PropsTypesConst } from "../props-types/constants";
import { TypesPreview } from "../types-preview";

export const FormFieldPropsConst = Object.freeze({
  value: (params: { valueType: string; defaultVal?: string }) => ({
    propName: "value",
    required: false,
    type: Object.values(PropsTypesConst).includes(
      params.valueType as PropsTypesConst
    ) ? (
      <TypesPreview type={PropsTypesConst.RadioType}>
        {PropsTypesConst.RadioType}
      </TypesPreview>
    ) : (
      params.valueType
    ),
    defaultVal: params.defaultVal || "",
  }),
  disabled: () => ({
    propName: "disabled",
    required: false,
    type: "boolean",
    defaultVal: "false",
  }),
  hasError: () => ({
    propName: "hasError",
    required: false,
    type: "boolean",
    defaultVal: "false",
  }),
  onChange: ({ valueType }: { valueType: string }) => ({
    propName: "onChange",
    required: false,
    type: `(value: ${valueType}) => void`,
    defaultVal: "",
  }),
  onBlur: ({ valueType }: { valueType: string }) => ({
    propName: "onBlur",
    required: false,
    type: `(value: ${valueType}) => void`,
    defaultVal: "",
  }),
});
