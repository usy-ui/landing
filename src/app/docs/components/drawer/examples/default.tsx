"use client";
import { useState } from "react";

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  Scrollable,
  usySpacing,
} from "@usy-ui/base";

import { loremIpsumLongConst, loremIpsumShortConst } from "./_constants";

export const Default = () => {
  const [pureDrawerOpen, setPureDrawerOpen] = useState(false);
  const [fullDrawerOpen, setFullDrawerOpen] = useState(false);

  const renderPureDrawer = () => {
    const openDrawer = () => setPureDrawerOpen(true);
    const closeDrawer = () => setPureDrawerOpen(false);

    return (
      <>
        <Button onClick={openDrawer}>Pure Drawer</Button>
        {pureDrawerOpen && (
          <Drawer onClose={closeDrawer}>
            <DrawerContent>{loremIpsumShortConst}</DrawerContent>
          </Drawer>
        )}
      </>
    );
  };

  const renderFullDrawer = () => {
    const openDrawer = () => setFullDrawerOpen(true);
    const closeDrawer = () => setFullDrawerOpen(false);

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
      <>
        <Button onClick={openDrawer}>Full Drawer</Button>
        {fullDrawerOpen && (
          <Drawer header={headerComp} footer={footerComp} onClose={closeDrawer}>
            <Scrollable>
              <DrawerContent>{loremIpsumLongConst}</DrawerContent>
            </Scrollable>
          </Drawer>
        )}
      </>
    );
  };

  return (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
      {renderPureDrawer()}
      {renderFullDrawer()}
    </Flex>
  );
};
