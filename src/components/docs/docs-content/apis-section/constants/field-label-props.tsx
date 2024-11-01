export const FieldLabelPropsConst = Object.freeze({
  label: () => ({
    propName: "label",
    required: false,
    type: "string | ReactNode",
    defaultVal: "",
  }),
  hasAsterisk: () => ({
    propName: "hasAsterisk",
    required: false,
    type: "boolean",
    defaultVal: "false",
  }),
});
