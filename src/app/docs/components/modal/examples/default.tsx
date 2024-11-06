"use client";
import { useState } from "react";

import { Button, Flex, Modal, Typography, usySpacing } from "@usy-ui/base";

import { loremIpsumHeader1, loremIpsumParagraph1 } from "@/mock/lorem-ipsum";

export const Default = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px20}>
      <>
        <Button onClick={openModal}>Open Modal</Button>
        {isModalOpen && (
          <Modal title={loremIpsumHeader1} onClose={closeModal}>
            <Typography>{loremIpsumParagraph1}</Typography>
          </Modal>
        )}
      </>
    </Flex>
  );
};
