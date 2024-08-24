export type MenuItemType = {
  id: string;
  label: string;
  url: string;
  items?: MenuItemType[];
};

const OverviewMenu: MenuItemType = {
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
    { id: "ov-typescript", url: "typescript", label: "Typescript" },
    { id: "ov-theming", url: "theming", label: "Theming" },
    {
      id: "ov-change-logs",
      url: "change-logs",
      label: "Change logs",
    },
  ],
};

const LayoutMenu: MenuItemType = {
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

const ComponentMenu: MenuItemType = {
  id: "components-menu",
  label: "Components",
  url: "components",
  items: [
    { id: "cpn-accordion", url: "accordion", label: "Accordion" },
    { id: "cpn-avatar", url: "avatar", label: "Avatar" },
    { id: "cpn-badge", url: "badge", label: "Badge" },
    { id: "cpn-checkbox", url: "checkbox", label: "Checkbox" },
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
    { id: "cpn-input", url: "input", label: "Input" },
    { id: "cpn-password", url: "password", label: "Password" },
    { id: "cpn-modal", url: "modal", label: "Modal" },
    { id: "cpn-select", url: "select", label: "Select" },
    { id: "cpn-tags", url: "tags", label: "Tags" },
    { id: "cpn-textarea", url: "textarea", label: "Textarea" },
    { id: "cpn-toast", url: "toast", label: "Toast" },
    {
      id: "cpn-toggle-section",
      url: "toggle-section",
      label: "Toggle Section",
    },
    { id: "cpn-typography", url: "typography", label: "Typography" },
  ],
};

const VariablesMenu: MenuItemType = {
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

const UtilitiesMenu: MenuItemType = {
  id: "utilities",
  label: "Utilities",
  items: [
    { id: "formatting", label: "Formatting" },
    { id: "helpers", label: "Helpers" },
  ],
};

export const MenuHierarchyConst = [
  OverviewMenu,
  LayoutMenu,
  ComponentMenu,
  VariablesMenu,
  UtilitiesMenu,
];
