export const FrequentlyUsedProps = Object.freeze({
  children: () => ({
    propName: "children",
    required: true,
    type: "ReactNode",
    defaultVal: "",
  }),
  content: () => ({
    propName: "content",
    required: true,
    type: "string | ReactNode",
    defaultVal: "",
  }),
});
