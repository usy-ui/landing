import { APIsSectionRowType } from "../apis-section.types";

export const getCommonCompPropsRows = (
  compName: string
): APIsSectionRowType[] => [
  {
    propName: "className",
    required: false,
    type: "string",
    defVault: "",
  },
  {
    propName: "name",
    required: false,
    type: "string",
    defVault: compName,
  },
  {
    propName: "testId",
    required: false,
    type: "string",
    defVault: compName,
  },
];
