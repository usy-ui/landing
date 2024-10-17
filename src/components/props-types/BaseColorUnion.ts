type BasePrimaryPaletteUnion = "primary" | "primary-light" | "primary-dark";
type BaseLightPaletteUnion =
  | "light-0"
  | "light-1"
  | "light-2"
  | "light-3"
  | "light-4"
  | "light-5"
  | "light-6"
  | "light-7"
  | "light-8"
  | "light-9";
type BaseDarkPaletteUnion =
  | "dark-0"
  | "dark-1"
  | "dark-2"
  | "dark-3"
  | "dark-4"
  | "dark-5"
  | "dark-6"
  | "dark-7"
  | "dark-8"
  | "dark-9";
type BaseColorPaletteUnion =
  | "white"
  | "black"
  | "gray"
  | "gold"
  | "bronze"
  | "brown"
  | "yellow"
  | "amber"
  | "orange"
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "lime"
  | "mint"
  | "sky";
type BaseColorUnion =
  | BasePrimaryPaletteUnion
  | BaseLightPaletteUnion
  | BaseDarkPaletteUnion
  | BaseColorPaletteUnion;
