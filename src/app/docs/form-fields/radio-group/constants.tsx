import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/types";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";
import { getCommonCompPropsRows } from "@/components/docs/docs-content/apis-section/utils/get-common-comp-props-rows";

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
  ...getCommonCompPropsRows("radio-group"),
];
