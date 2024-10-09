"use client";
import { useState } from "react";

import {
  Button,
  Flex,
  Input,
  Modal,
  Panel,
  ParagraphHeading,
  Table,
  usySpacing,
} from "@usy-ui/base";

import { TableColumns, TableData } from "./constants";

export const TeamMembers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Panel title={<ParagraphHeading title="Team Members" />}>
        <Flex
          gap={usySpacing.px6}
          marginProps={{ marginBottom: usySpacing.px20 }}
        >
          <Input placeholder="Type email..." size="small" />
          <Button variant="outline" size="small" noSole>
            Search
          </Button>
          <Button variant="primary" size="small" onClick={openModal} noSole>
            Export
          </Button>
        </Flex>
        <Table
          rowKey="id"
          columns={TableColumns}
          dataRows={TableData}
          styles={{ hideHeader: true, hideOuterBorder: true }}
        />
      </Panel>
      {isOpen && (
        <Modal
          title={
            <ParagraphHeading
              title="Export data"
              description="You can export the list of member and use for your purpose"
            />
          }
          onClose={closeModal}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            gap={usySpacing.px20}
          >
            <Button variant="primary" size="small">
              Export CSV
            </Button>
            <Button variant="primary" size="small">
              Export XLS
            </Button>
          </Flex>
        </Modal>
      )}
    </>
  );
};
