import styled from "styled-components";
import { CheckCircleIcon, usyColor, usySpacing } from "usy-ui";

export const SpecApiContainer = styled.section`
  margin-top: ${usySpacing.px56};
`;

export const BadgePropName = styled.span`
  color: ${usyColor.white};
  font-size: 0.8rem;
  background-color: ${usyColor.primary};
  padding: 0 ${usySpacing.px4};
  border-radius: ${usySpacing.px4};
`;

export const RequiredIcon = styled(CheckCircleIcon)`
  width: ${usySpacing.px16};
  height: ${usySpacing.px16};

  path {
    stroke: ${usyColor.primary};
  }
`;
