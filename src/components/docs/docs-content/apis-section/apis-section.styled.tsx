import { CheckCircleIcon, usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const RequiredIcon = styled(CheckCircleIcon)`
  width: ${usySpacing.px16};
  height: ${usySpacing.px16};

  path {
    stroke: ${usyColor.primary};
  }
`;
