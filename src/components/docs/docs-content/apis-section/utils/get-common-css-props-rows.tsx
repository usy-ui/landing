import { PropsTypesConst } from "../props-types/constants";
import { TypesPreview } from "../types-preview";

export const getWidthPropsRow = () => ({
  propName: "widthProps",
  required: false,
  type: (
    <TypesPreview type={PropsTypesConst.WidthCSSType}>
      {PropsTypesConst.WidthCSSType}
    </TypesPreview>
  ),
  defVault: "",
});

export const getHeightPropsRow = () => ({
  propName: "heightProps",
  required: false,
  type: (
    <TypesPreview type={PropsTypesConst.HeightCSSType}>
      {PropsTypesConst.HeightCSSType}
    </TypesPreview>
  ),
  defVault: "",
});

export const getMarginPropsRow = () => ({
  propName: "marginProps",
  required: false,
  type: (
    <TypesPreview type={PropsTypesConst.MarginCSSType}>
      {PropsTypesConst.MarginCSSType}
    </TypesPreview>
  ),
  defVault: "",
});

export const getPaddingPropsRow = () => ({
  propName: "paddingProps",
  required: false,
  type: (
    <TypesPreview type={PropsTypesConst.PaddingCSSType}>
      {PropsTypesConst.PaddingCSSType}
    </TypesPreview>
  ),
  defVault: "",
});
