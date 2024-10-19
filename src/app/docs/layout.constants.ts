/* eslint-disable no-unused-vars */
export enum DocsRoute {
  OVERVIEW = "/overview",
  LAYOUT = "/layout",
  COMPONENTS = "/components",
  UTILITIES = "/utilities",
}

export type MenuItemType = {
  id: string;
  label: string;
  url: string;
  items?: MenuItemType[];
};

const OverviewMenuConst: MenuItemType = {
  id: "overview-menu",
  label: "Overview",
  url: "overview",
  items: [
    {
      id: "ov-introduction",
      url: "introduction",
      label: "Introduction",
    },
    {
      id: "ov-getting-started",
      url: "getting-started",
      label: "Getting started",
    },
    { id: "ov-theming", url: "theming", label: "Theming" },
    {
      id: "ov-releases",
      url: "releases",
      label: "Releases",
    },
  ],
};

const LayoutMenuConst: MenuItemType = {
  id: "layout-menu",
  label: "Layout",
  url: "layout",
  items: [
    { id: "lo-box", url: "box", label: "Box" },
    { id: "lo-flex", url: "flex", label: "Flex" },
    { id: "lo-scrollable", url: "scrollable", label: "Scrollable" },
    { id: "lo-panel", url: "panel", label: "Panel" },
  ],
};

const FormFieldsMenuConst: MenuItemType = {
  id: "form-fields-menu",
  label: "Form Fields",
  url: "form-fields",
  items: [
    { id: "cpn-checkbox", url: "checkbox", label: "Checkbox" },
    { id: "cpn-input", url: "input", label: "Input" },
    { id: "cpn-password", url: "password", label: "Password" },
    { id: "cpn-radio-group", url: "radio-group", label: "Radio Group" },
    { id: "cpn-select", url: "select", label: "Select" },
    { id: "cpn-switch", url: "switch", label: "Switch" },
    { id: "cpn-tags", url: "tags", label: "Tags" },
    { id: "cpn-textarea", url: "textarea", label: "Textarea" },
  ],
};

const ComponentMenuConst: MenuItemType = {
  id: "components-menu",
  label: "Components",
  url: "components",
  items: [
    { id: "cpn-accordion", url: "accordion", label: "Accordion" },
    { id: "cpn-avatar", url: "avatar", label: "Avatar" },
    { id: "cpn-badge", url: "badge", label: "Badge" },
    { id: "cpn-button", url: "button", label: "Button" },
    { id: "cpn-copyable", url: "copyable", label: "Copyable" },
    { id: "cpn-drawer", url: "drawer", label: "Drawer" },
    {
      id: "cpn-dropdown-menu",
      url: "dropdown-menu",
      label: "Dropdown Menu",
    },
    {
      id: "cpn-image-gallery",
      url: "image-gallery",
      label: "Image Gallery",
    },
    { id: "cpn-modal", url: "modal", label: "Modal" },
    {
      id: "cpn-paragraph-heading",
      url: "paragraph-heading",
      label: "Paragraph Heading",
    },
    { id: "cpn-popover", url: "popover", label: "Popover" },
    { id: "cpn-skeleton", url: "skeleton", label: "Skeleton" },
    { id: "cpn-table", url: "table", label: "Table" },
    { id: "cpn-tabs", url: "tabs", label: "Tabs" },
    { id: "cpn-toast", url: "toast", label: "Toast" },
    {
      id: "cpn-toggle-panel",
      url: "toggle-panel",
      label: "Toggle Panel",
    },
    { id: "cpn-tooltip", url: "tooltip", label: "Tooltip" },
    { id: "cpn-typography", url: "typography", label: "Typography" },
  ],
};

const VariablesMenuConst: MenuItemType = {
  id: "variables-menu",
  label: "Variables",
  url: "variables",
  items: [
    { id: "var-color", url: "color", label: "Color" },
    { id: "var-element", url: "element", label: "Element" },
    { id: "var-font-size", url: "font-size", label: "Font size" },
    { id: "var-font-weight", url: "font-weight", label: "Font weight" },
    { id: "var-layout", url: "layout", label: "Layout" },
    { id: "var-spacing", url: "spacing", label: "Spacing" },
    { id: "var-z-index", url: "z-index", label: "Z-index" },
  ],
};

const UtilitiesMenuConst: MenuItemType = {
  id: "utilities-menu",
  url: "utilities",
  label: "Utilities",
  items: [
    { id: "utls-formatting", url: "formatting", label: "Formatting" },
    { id: "utls-helpers", url: "helpers", label: "Helpers" },
  ],
};

export const MenuHierarchyConst = [
  OverviewMenuConst,
  LayoutMenuConst,
  FormFieldsMenuConst,
  ComponentMenuConst,
  VariablesMenuConst,
  UtilitiesMenuConst,
];
