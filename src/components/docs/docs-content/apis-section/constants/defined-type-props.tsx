import { PropsTypesConst } from "../props-types/constants";
import { TypesPreview } from "../types-preview";

export const DefinedTypeProps = Object.freeze({
  color: (params?: { defaultVal?: string }) => ({
    propName: "color",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseColorUnion}>
        {PropsTypesConst.BaseSizeUnion}
      </TypesPreview>
    ),
    defaultVal: params?.defaultVal || "primary",
  }),
  size: (params?: { includeExtra?: boolean; defaultVal?: string }) => ({
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
      </>
    ),
    defaultVal: params?.defaultVal || "medium",
  }),
});
