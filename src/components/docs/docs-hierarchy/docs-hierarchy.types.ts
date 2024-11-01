export type MenuItemType = {
  id: string;
  label: string;
  url: string;
  items?: MenuItemType[];
};
