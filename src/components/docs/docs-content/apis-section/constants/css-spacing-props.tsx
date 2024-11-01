import { PropsTypesConst } from "../props-types/constants";
import { TypesPreview } from "../types-preview";

export const CssSpacingPropsConst = Object.freeze({
  widthProps: () => ({
    propName: "widthProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.WidthCSSType}>
        {PropsTypesConst.WidthCSSType}
      </TypesPreview>
    ),
    defVault: "",
  }),
  heightProps: () => ({
    propName: "heightProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.HeightCSSType}>
        {PropsTypesConst.HeightCSSType}
      </TypesPreview>
    ),
    defVault: "",
  }),
  marginProps: () => ({
    propName: "marginProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.MarginCSSType}>
        {PropsTypesConst.MarginCSSType}
      </TypesPreview>
    ),
    defVault: "",
  }),
  paddingProps: () => ({
    propName: "paddingProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.PaddingCSSType}>
        {PropsTypesConst.PaddingCSSType}
      </TypesPreview>
    ),
    defVault: "",
  }),
});
