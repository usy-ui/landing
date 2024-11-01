import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import { CommonCompPropsConst } from "@/components/docs/docs-content/apis-section/constants";
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
    defVault: "",
  },
  {
    propName: "value",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.RadioType}>
        {PropsTypesConst.RadioType}
      </TypesPreview>
    ),
    defVault: "items[0]",
  },
  {
    propName: "direction",
    required: false,
    type: "vertical | horizontal",
    defVault: "horizontal",
  },
  {
    propName: "label",
    required: false,
    type: "string",
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
    type: `(value: ${PropsTypesConst.RadioType}) => void`,
    defVault: "",
  },
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("radio-group"),
  CommonCompPropsConst.testId("radio-group"),
];
