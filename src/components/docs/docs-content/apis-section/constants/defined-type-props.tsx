import { Typography } from "@usy-ui/base";

import { PropsTypesConst } from "../props-types/constants";
import { TypesPreview } from "../types-preview";

export const DefinedTypeProps = Object.freeze({
  /**
   * Variant
   */
  variant: (params?: { defaultVal?: string }) => ({
    propName: "variant",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseVariantUnion}>
        {PropsTypesConst.BaseVariantUnion}
      </TypesPreview>
    ),
    defaultVal: params?.defaultVal || "outline",
  }),
  /**
   * Position
   */
  position: (params?: { includeExtra?: boolean; defaultVal?: string }) => ({
    propName: "position",
    required: false,
    type: (
      <>
        <TypesPreview type={PropsTypesConst.BasePositionUnion}>
          {PropsTypesConst.BasePositionUnion}
        </TypesPreview>
        {params?.includeExtra && (
          <>
            {" | "}
            <TypesPreview type={PropsTypesConst.BasePositionExtraUnion}>
              {PropsTypesConst.BasePositionExtraUnion}
            </TypesPreview>
          </>
        )}
      </>
    ),
    defaultVal: params?.defaultVal || "top",
  }),
  /**
   * Color
   */
  color: (params?: { hasRandom?: boolean; defaultVal?: string }) => ({
    propName: "color",
    required: false,
    type: (
      <>
        <TypesPreview type={PropsTypesConst.BaseColorUnion}>
          {PropsTypesConst.BaseColorUnion}
        </TypesPreview>
        {params?.hasRandom && (
          <>
            {" | "}
            <Typography size="small">random</Typography>
          </>
        )}
      </>
    ),
    defaultVal: params?.defaultVal || "primary",
  }),
  /**
   * Size
   */
  size: (params?: {
    includeExtra?: boolean;
    includeGigant?: boolean;
    defaultVal?: string;
  }) => ({
    propName: "size",
    required: false,
    type: (
      <>
        <TypesPreview type={PropsTypesConst.BaseSizeUnion}>
          {PropsTypesConst.BaseSizeUnion}
        </TypesPreview>
        {params?.includeExtra && (
          <>
            {" | "}
            <TypesPreview type={PropsTypesConst.BaseSizeExtraUnion}>
              {PropsTypesConst.BaseSizeExtraUnion}
            </TypesPreview>
          </>
        )}
        {params?.includeGigant && (
          <>
            {" | "}
            <TypesPreview type={PropsTypesConst.BaseSizeGigantUnion}>
              {PropsTypesConst.BaseSizeGigantUnion}
            </TypesPreview>
          </>
        )}
      </>
    ),
    defaultVal: params?.defaultVal || "medium",
  }),
  /**
   * Radius
   */
  radius: (params?: { defaultVal?: string }) => ({
    propName: "radius",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseRadiusUnion}>
        {PropsTypesConst.BaseRadiusUnion}
      </TypesPreview>
    ),
    defaultVal: params?.defaultVal || "medium",
  }),
  /**
   * Tag
   */
  semanticTag: (params?: { defaultVal?: string }) => ({
    propName: "tag",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseSemanticTagUnion}>
        {PropsTypesConst.BaseSemanticTagUnion}
      </TypesPreview>
    ),
    defaultVal: params?.defaultVal || "div",
  }),
});
