import { FC, ReactNode, useRef, useState } from "react";

import { Tooltip, Typography } from "@usy-ui/base";

import { CopyMask, IconContainer, IconNameTypography } from "./styled";

export type ThumbIconType = {
  element: ReactNode;
  displayName: string;
  componentName: string;
};

type ThumbIconProps = {
  icon: ThumbIconType;
};

export const ThumbIcon: FC<ThumbIconProps> = ({ icon }) => {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<undefined | ReturnType<typeof setTimeout>>();

  const handleClick = () => {
    clearTimeout(timeoutRef.current);
    navigator.clipboard.writeText(icon.componentName);
    setIsCopied(true);

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <Tooltip key={icon.displayName} content={icon.displayName}>
      <IconContainer>
        {icon.element}
        <IconNameTypography size="small" align="center">
          {icon.displayName}
        </IconNameTypography>
        <CopyMask onClick={handleClick}>
          <Typography tag="small" size="small" weight="bold">
            {isCopied ? "Copied" : "Copy"}
          </Typography>
        </CopyMask>
      </IconContainer>
    </Tooltip>
  );
};
