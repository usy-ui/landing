import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  CssSpacingPropsConst,
  FieldLabelPropsConst,
} from "@/components/docs/docs-content/apis-section/constants";

export const TagsPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "tags",
    required: false,
    type: "string[]",
    defaultVal: "",
  },
  {
    propName: "placeholder",
    required: false,
    type: "string",
    defaultVal: "New tag...",
  },
  {
    propName: "onAdd",
    required: false,
    type: "(tags: string[], addedTag: string) => void",
    defaultVal: "",
  },
  {
    propName: "onRemove",
    required: false,
    type: "(tags: string[], removedTag: string) => void",
    defaultVal: "",
  },
  FieldLabelPropsConst.label(),
  FieldLabelPropsConst.hasAsterisk(),
  CssSpacingPropsConst.widthProps(),
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("tags"),
  CommonCompPropsConst.testId("tags"),
];
