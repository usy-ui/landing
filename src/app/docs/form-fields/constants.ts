import { CSSProperties } from "react";

import { usyColor, usySpacing } from "@usy-ui/base";

export const ToastJsonStylesConst: CSSProperties = {
  backgroundColor: usyColor.black,
  color: usyColor.white,
  border: "none",
  padding: `${usySpacing.px6} ${usySpacing.px14}`,
};
