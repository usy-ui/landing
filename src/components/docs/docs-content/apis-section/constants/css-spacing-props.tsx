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
    defaultVal: "",
  }),
  heightProps: () => ({
    propName: "heightProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.HeightCSSType}>
        {PropsTypesConst.HeightCSSType}
      </TypesPreview>
    ),
    defaultVal: "",
  }),
  marginProps: () => ({
    propName: "marginProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.MarginCSSType}>
        {PropsTypesConst.MarginCSSType}
      </TypesPreview>
    ),
    defaultVal: "",
  }),
  paddingProps: () => ({
    propName: "paddingProps",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.PaddingCSSType}>
        {PropsTypesConst.PaddingCSSType}
      </TypesPreview>
    ),
    defaultVal: "",
  }),
});
