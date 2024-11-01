import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";
import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/utils/get-common-comp-props-rows";
import { getWidthPropsRow } from "@/components/docs/docs-content/apis-section/utils/get-common-css-props-rows";

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
    defVault: "text",
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
    defVault: "",
  },
  {
    propName: "onBlur",
    required: false,
    type: "(value: string) => void",
    defVault: "",
  },
  {
    propName: "transformOnChange",
    required: false,
    type: "(value: string) => void",
    defVault: "",
  },
  {
    propName: "transformOnBlur",
    required: false,
    type: "(value: string) => void",
    defVault: "",
  },
  getWidthPropsRow(),
  ...getCommonCompPropsRows("input"),
];
