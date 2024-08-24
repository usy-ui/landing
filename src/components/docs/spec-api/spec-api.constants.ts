import { SpecApiPropsRowType } from ".";

export const getCommonSpecApiRows = (
  compName: string
): SpecApiPropsRowType[] => [
  {
    propName: "name",
    required: false,
    type: "string",
    defVault: compName,
  },
  {
    propName: "className",
    required: false,
    type: "string",
    defVault: "",
  },
  {
    propName: "testId",
    required: false,
    type: "string",
    defVault: compName,
  },
];
