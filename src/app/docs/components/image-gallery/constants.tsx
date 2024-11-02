import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  DefinedTypeProps,
} from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const ImageGalleryPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "images",
    required: true,
    type: (
      <TypesPreview type={PropsTypesConst.ImageGalleryType}>
        {PropsTypesConst.ImageGalleryType}[]
      </TypesPreview>
    ),
    defaultVal: "",
  },
  DefinedTypeProps.tag(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("image-gallery"),
  CommonCompPropsConst.testId("image-gallery"),
];
