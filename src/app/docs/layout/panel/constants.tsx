import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const PanelPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "children",
    required: true,
    type: "ReactNode",
    defVault: "",
  },
  {
    propName: "tag",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseSemanticTagUnion}>
        {PropsTypesConst.BaseSemanticTagUnion}
      </TypesPreview>
    ),
    defVault: "div",
  },
  {
    propName: "title",
    required: false,
    type: "ReactNode",
    defVault: "",
  },
  CssSpacingPropsConst.widthProps(),
  CssSpacingPropsConst.heightProps(),
  CssSpacingPropsConst.marginProps(),
  CssSpacingPropsConst.paddingProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("panel"),
  CommonCompPropsConst.testId("panel"),
];
