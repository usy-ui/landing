import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/utils/get-common-comp-props-rows";

export const CheckboxPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "label",
    required: false,
    type: "string | ReactNode",
    defVault: "",
  },
  {
    propName: "checked",
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
    type: "(value: boolean) => void",
    defVault: "",
  },
  ...getCommonCompPropsRows("checkbox"),
];
