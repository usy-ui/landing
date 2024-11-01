import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
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
    defVault: "",
  },
  {
    propName: "isOpen",
    required: false,
    type: "boolean",
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
    defVault: "",
  },
  {
    propName: "value",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.SelectItemType}>
        {PropsTypesConst.SelectItemType}
      </TypesPreview>
    ),
    defVault: "",
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
    type: `(value: ${PropsTypesConst.SelectItemType}) => void`,
    defVault: "",
  },
  CssSpacingPropsConst.widthProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("select"),
  CommonCompPropsConst.testId("select"),
];
