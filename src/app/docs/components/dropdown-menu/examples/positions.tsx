"use client";
import {
  Button,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuOverlay,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Flex,
  usySpacing,
} from "@usy-ui/base";

export const Positions = () => {
  const renderDropdownItems = () => {
    return (
      <>
        <DropdownMenuItem onClick={() => ""}>Change Password</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </>
    );
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px20}
    >
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Position Top</Button>
        </DropdownMenuTrigger>
        <DropdownMenuOverlay position="top">
          {renderDropdownItems()}
        </DropdownMenuOverlay>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Position Bottom</Button>
        </DropdownMenuTrigger>
        <DropdownMenuOverlay position="bottom">
          {renderDropdownItems()}
        </DropdownMenuOverlay>
      </DropdownMenu>
    </Flex>
  );
};
