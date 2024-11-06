import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  DefinedTypeProps,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const ButtonPropsRowsConst: APIsSectionRowType[] = [
  FrequentlyUsedProps.children(),
  {
    propName: "type",
    required: false,
    type: "button | submit",
    defaultVal: "button",
  },
  {
    propName: "variant",
    required: false,
    type: "primary | outline | normal | danger | invisible",
    defaultVal: "normal",
  },
  {
    propName: "size",
    required: false,
    type: (
      <>
        <TypesPreview type={PropsTypesConst.BaseSizeUnion}>
          {PropsTypesConst.BaseSizeUnion}
        </TypesPreview>
        {` | tiny`}
      </>
    ),
    defaultVal: "medium",
  },
  DefinedTypeProps.radius({ defaultVal: "small" }),
  {
    propName: "loading",
    required: false,
    type: "boolean",
    defaultVal: "false",
  },
  {
    propName: "disabled",
    required: false,
    type: "boolean",
    defaultVal: "false",
  },
  {
    propName: "noSole",
    required: false,
    type: "boolean",
    defaultVal: "false",
  },
  {
    propName: "iconLeft",
    required: false,
    type: "ReactNode",
    defaultVal: "",
  },
  {
    propName: "iconRight",
    required: false,
    type: "ReactNode",
    defaultVal: "",
  },
  {
    propName: "onClick",
    required: false,
    type: "() => void",
    defaultVal: "",
  },
  CssSpacingPropsConst.widthProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("button"),
  CommonCompPropsConst.testId("button"),
];
