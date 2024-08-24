import { PropsRowType } from "@/components/docs/spec-api-reference";

export const propsDataRows: PropsRowType[] = [
  {
    propName: "name",
    type: "string",
    default: "avatar",
  },
  {
    propName: "url",
    type: "string",
    default: "-",
  },
  {
    propName: "size",
    type: "BaseSize | BaseExtraSize",
    default: "medium",
  },
  {
    propName: "color",
    type: `BaseColor | random`,
    default: "black",
  },
  {
    propName: "radius",
    type: "BaseRadius",
    default: "small",
  },
  {
    propName: "fallback",
    type: "ReactNode",
    default: "A",
  },
  {
    propName: "imgAlt",
    type: "string",
    default: "-",
  },
  {
    propName: "onClick",
    type: "() => void",
    default: "-",
  },
];
