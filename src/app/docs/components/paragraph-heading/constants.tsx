import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const ParagraphHeadingPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "title",
    required: true,
    type: "string | ReactNode",
    defaultVal: "",
  },
  {
    propName: "titleSize",
    required: false,
    type: (
      <>
        <TypesPreview type={PropsTypesConst.BaseSizeUnion}>
          {PropsTypesConst.BaseSizeUnion}
        </TypesPreview>
        {" | "}
        <TypesPreview type={PropsTypesConst.BaseSizeExtraUnion}>
          {PropsTypesConst.BaseSizeExtraUnion}
        </TypesPreview>
        {" | "}
        <TypesPreview type={PropsTypesConst.BaseSizeGigantUnion}>
          {PropsTypesConst.BaseSizeGigantUnion}
        </TypesPreview>
      </>
    ),
    defaultVal: "large",
  },
  {
    propName: "description",
    required: false,
    type: "string | ReactNode",
    defaultVal: "",
  },
  {
    propName: "descriptionSize",
    required: false,
    type: (
      <>
        <TypesPreview type={PropsTypesConst.BaseSizeUnion}>
          {PropsTypesConst.BaseSizeUnion}
        </TypesPreview>
        {" | "}
        <TypesPreview type={PropsTypesConst.BaseSizeExtraUnion}>
          {PropsTypesConst.BaseSizeExtraUnion}
        </TypesPreview>
        {" | "}
        <TypesPreview type={PropsTypesConst.BaseSizeGigantUnion}>
          {PropsTypesConst.BaseSizeGigantUnion}
        </TypesPreview>
      </>
    ),
    defaultVal: "small",
  },
  CssSpacingPropsConst.marginProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("paragraph-heading"),
  CommonCompPropsConst.testId("paragraph-heading"),
];
