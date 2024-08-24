export type MenuItemType = {
  id: string;
  label: string;
  url?: string;
  items?: MenuItemType[];
};

const OverviewMenu: MenuItemType = {
  id: "overview-menu",
  label: "Overview",
  items: [
    { id: "introduction", label: "Introduction" },
    { id: "getting-started", label: "Getting started" },
    { id: "typescript", label: "Typescript" },
    { id: "theming", label: "Theming" },
    { id: "change-logs", label: "Change logs" },
  ],
};

const LayoutMenu: MenuItemType = {
  id: "layout-menu",
  label: "Layout",
  items: [
    { id: "box", label: "Box" },
    { id: "flex", label: "Flex" },
    { id: "scrollable", label: "Scrollable" },
    { id: "panel", label: "Panel" },
  ],
};

const ComponentMenu: MenuItemType = {
  id: "components-menu",
  label: "Components",
  items: [
    { id: "accordion", label: "Accordion" },
    { id: "avatar", label: "Avatar" },
    { id: "badge", label: "Badge" },
    { id: "checkbox", label: "Checkbox" },
    { id: "drawer", label: "Drawer" },
    { id: "dropdown-menu", label: "Dropdown Menu" },
    { id: "image-gallery", label: "Image Gallery" },
    { id: "input", label: "Input" },
    { id: "password", label: "Password" },
    { id: "modal", label: "Modal" },
    { id: "select", label: "Select" },
    { id: "tags", label: "Tags" },
    { id: "textarea", label: "Textarea" },
    { id: "toast", label: "Toast" },
    { id: "toggle-section", label: "Toggle Section" },
    { id: "typography", label: "Typography" },
  ],
};

const VariablesMenu: MenuItemType = {
  id: "variables",
  label: "Variables",
  items: [
    { id: "var-color", label: "Color" },
    { id: "var-element", label: "Element" },
    { id: "var-font-size", label: "Font size" },
    { id: "var-font-weight", label: "Font weight" },
    { id: "var-layout", label: "Layout" },
    { id: "var-spacing", label: "Spacing" },
    { id: "var-z-index", label: "Z-index" },
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
