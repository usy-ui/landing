"use client";
import { useState } from "react";

import {
  Button,
  Drawer,
  DrawerFooter,
  DrawerHeader,
  Flex,
  Typography,
  usySpacing,
} from "@usy-ui/base";

import {
  loremIpsumHeader1,
  loremIpsumHeader2,
  loremIpsumHeader3,
  loremIpsumParagraph1,
  loremIpsumParagraph2,
  loremIpsumParagraph3,
} from "@/mock/lorem-ipsum";

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
            <Typography size="large" weight="bold">
              {loremIpsumHeader1}
            </Typography>
            <Typography>{loremIpsumParagraph1}</Typography>
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
            <Typography size="large" weight="bold">
              {loremIpsumHeader1}
            </Typography>
            <Typography>{loremIpsumParagraph1}</Typography>
            <br />
            <Typography size="large" weight="bold">
              {loremIpsumHeader2}
            </Typography>
            <Typography>{loremIpsumParagraph2}</Typography>
            <br />
            <Typography size="large" weight="bold">
              {loremIpsumHeader3}
            </Typography>
            <Typography>{loremIpsumParagraph3}</Typography>
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
