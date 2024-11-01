import { PropsTypesConst } from "../props-types/constants";
import { TypesPreview } from "../types-preview";

type SizeParams = {
  includeExtra?: boolean;
  defaultVal: string;
};

export const DefinedTypeProps = Object.freeze({
  size: (params?: SizeParams) => ({
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
