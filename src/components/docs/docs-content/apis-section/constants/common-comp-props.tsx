export const CommonCompPropsConst = Object.freeze({
  className: () => ({
    propName: "className",
    required: false,
    type: "string",
    defaultVal: "",
  }),
  name: (compName: string) => ({
    propName: "name",
    required: false,
    type: "string",
    defaultVal: compName,
  }),
  testId: (compName: string) => ({
    propName: "testId",
    required: false,
    type: "string",
    defaultVal: compName,
  }),
});
