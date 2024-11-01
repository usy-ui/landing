import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const PasswordPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "value",
    required: false,
    type: "string",
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
  CssSpacingPropsConst.widthProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("password"),
  CommonCompPropsConst.testId("password"),
];
