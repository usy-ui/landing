export type MenuItemType = {
  id: string;
  label: string;
  url: string;
  items?: Omit<MenuItemType, "items">[];
  hasWarning?: boolean;
};
