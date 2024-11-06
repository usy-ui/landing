import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  DefinedTypeProps,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const TypographyPropsRowsConst: APIsSectionRowType[] = [
  FrequentlyUsedProps.children(),
  {
    propName: "tag",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseTypoTagUnion}>
        {PropsTypesConst.BaseTypoTagUnion}
      </TypesPreview>
    ),
    defaultVal: "p",
  },
  {
    propName: "weight",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BaseTypoWeightUnion}>
        {PropsTypesConst.BaseTypoWeightUnion}
      </TypesPreview>
    ),
    defaultVal: "medium",
  },
  DefinedTypeProps.color({ hasRandom: true, defaultVal: "dark-9" }),
  DefinedTypeProps.size({ includeExtra: true, includeGigant: true }),
  {
    propName: "align",
    required: false,
    type: "left | center | right | justify",
    defaultVal: "left",
  },
  {
    propName: "wrap",
    required: false,
    type: "wrap | nowrap",
    defaultVal: "wrap",
  },
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("typography"),
  CommonCompPropsConst.testId("typography"),
];
