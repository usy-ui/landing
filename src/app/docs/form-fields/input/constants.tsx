import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/helpers/get-common-comp-props-rows";
import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/types";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";
import { PropsTypesConst } from "@/components/props-types/constants";

export const InputPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "value",
    required: false,
    type: "string",
    defVault: "",
  },
  {
    propName: "type",
    required: false,
    type: "text | number",
    defVault: "",
  },
  {
    propName: "size",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseSizeUnion}>
        {PropsTypesConst.BaseSizeUnion}
      </TypesPreview>
    ),
    defVault: "medium",
  },
  {
    propName: "iconLeft",
    required: false,
    type: "ReactNode",
    defVault: "",
  },
  {
    propName: "iconRight",
    required: false,
    type: "ReactNode",
    defVault: "",
  },
  {
    propName: "placeholder",
    required: false,
    type: "string",
    defVault: "",
  },
  {
    propName: "description",
    required: false,
    type: "string",
    defVault: "",
  },
  {
    propName: "label",
    required: false,
    type: "string",
    defVault: "",
  },
  {
    propName: "hasAsterisk",
    required: false,
    type: "boolean",
    defVault: "false",
  },
  {
    propName: "hasError",
    required: false,
    type: "boolean",
    defVault: "false",
  },
  {
    propName: "disabled",
    required: false,
    type: "boolean",
    defVault: "false",
  },
  {
    propName: "onChange",
    required: false,
    type: "(value: string) => void",
    defVault: "false",
  },
  {
    propName: "onBlur",
    required: false,
    type: "(value: string) => void",
    defVault: "false",
  },
  {
    propName: "transformOnChange",
    required: false,
    type: "(value: string) => void",
    defVault: "false",
  },
  {
    propName: "transformOnBlur",
    required: false,
    type: "(value: string) => void",
    defVault: "false",
  },
  {
    propName: "widthProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.WidthCSSType}>
        {PropsTypesConst.WidthCSSType}
      </TypesPreview>
    ),
    defVault: "",
  },
  ...getCommonCompPropsRows("input"),
];
