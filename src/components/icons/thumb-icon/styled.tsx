import { Typography, usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const CopyMask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.04);
  display: none;
  justify-content: center;
  align-items: center;
  transition-duration: 0.2s;
`;

export const IconContainer = styled.div`
  width: 120px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${usySpacing.px12};
  padding: 0 ${usySpacing.px10};
  border: 1px solid ${usyColor.light1};
  border-radius: ${usySpacing.px6};
  position: relative;
  margin: 0;

  svg {
    width: 26px;
    height: 26px;
  }

  &:hover {
    ${CopyMask} {
      display: flex;
    }
  }
`;

export const IconNameTypography = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
