"use client";
import { useState } from "react";

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerProps,
  Flex,
  Scrollable,
  Typography,
  usySpacing,
} from "@usy-ui/base";

import { loremIpsumHeader1, loremIpsumParagraph1 } from "@/mock/lorem-ipsum";

export const Sides = () => {
  const [side, setSide] = useState<DrawerProps["side"]>("right");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const openLeftDrawer = () => {
    setSide("left");
    setIsDrawerOpen(true);
  };
  const openRightDrawer = () => {
    setSide("right");
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => setIsDrawerOpen(false);

  const headerComp = (
    <DrawerHeader title="What is Lorem Ipsum?" onClose={closeDrawer} />
  );
  const footerComp = (
    <DrawerFooter
      alignContent="center"
      buttons={[
        {
          variant: "primary",
          children: "Confirm",
          onClick: () => alert("Confirmed"),
        },
        {
          variant: "normal",
          children: "Cancel",
          onClick: () => alert("Canceled"),
        },
      ]}
    />
  );

  return (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
      <Button onClick={openLeftDrawer}>Left Side</Button>
      <Button onClick={openRightDrawer}>Right Side</Button>
      {isDrawerOpen && (
        <Drawer
          side={side}
          header={headerComp}
          footer={footerComp}
          onClose={closeDrawer}
        >
          <Scrollable>
            <DrawerContent>
              <Typography size="large" weight="bold">
                {loremIpsumHeader1}
              </Typography>
              <Typography>{loremIpsumParagraph1}</Typography>
            </DrawerContent>
          </Scrollable>
        </Drawer>
      )}
    </Flex>
  );
};
