type BaseTypoNormalUnion = "small" | "label" | "span" | "p";
type BaseTypoHeadingUnion = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type BaseTypoFormatUnion =
  | "mark"
  | "ins"
  | "del"
  | "sub"
  | "sup"
  | "em"
  | "strong";
type BaseTypoTagUnion =
  | BaseTypoNormalUnion
  | BaseTypoHeadingUnion
  | BaseTypoFormatUnion;
