import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  DefinedTypeProps,
} from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const BadgePropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "variant",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseVariantUnion}>
        {PropsTypesConst.BaseVariantUnion}
      </TypesPreview>
    ),
    defaultVal: "outline",
  },
  DefinedTypeProps.size({ includeExtra: true }),
  DefinedTypeProps.color({ defaultVal: "primary" }),
  {
    propName: "radius",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseRadiusUnion}>
        {PropsTypesConst.BaseRadiusUnion}
      </TypesPreview>
    ),
    defaultVal: "small",
  },
  {
    propName: "children",
    required: false,
    type: "ReactNode",
    defaultVal: "",
  },
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("badge"),
  CommonCompPropsConst.testId("badge"),
];
