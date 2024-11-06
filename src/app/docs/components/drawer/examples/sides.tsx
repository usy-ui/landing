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
  usySpacing,
} from "@usy-ui/base";

import { loremIpsumLongConst } from "./_constants";

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
      <Button onClick={openLeftDrawer}>Left Drawer</Button>
      <Button onClick={openRightDrawer}>Right Drawer</Button>
      {isDrawerOpen && (
        <Drawer
          side={side}
          header={headerComp}
          footer={footerComp}
          onClose={closeDrawer}
        >
          <Scrollable>
            <DrawerContent>{loremIpsumLongConst}</DrawerContent>
          </Scrollable>
        </Drawer>
      )}
    </Flex>
  );
};
