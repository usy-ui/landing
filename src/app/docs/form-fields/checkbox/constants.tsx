import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import { CommonCompPropsConst } from "@/components/docs/docs-content/apis-section/constants";

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
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("checkbox"),
  CommonCompPropsConst.testId("checkbox"),
];
