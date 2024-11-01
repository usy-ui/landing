export const CommonCompPropsConst = Object.freeze({
  className: () => ({
    propName: "className",
    required: false,
    type: "string",
    defVault: "",
  }),
  name: (compName: string) => ({
    propName: "name",
    required: false,
    type: "string",
    defVault: compName,
  }),
  testId: (compName: string) => ({
    propName: "testId",
    required: false,
    type: "string",
    defVault: compName,
  }),
});
