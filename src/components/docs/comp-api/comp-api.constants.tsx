"use client";
import { TableColumnType, Typography } from "usy-ui";

import { BadgePropName, RequiredIcon } from "./comp-api.styled";

import { CompApiPropsRowType } from ".";

export const propsColumns: TableColumnType<CompApiPropsRowType>[] = [
  {
    key: "propName",
    title: "Prop",
    renderRow: ({ propName }) => <BadgePropName>{propName}</BadgePropName>,
  },
  {
    key: "required",
    title: "Required",
    renderRow: ({ required }) => required && <RequiredIcon />,
  },
  {
    key: "type",
    title: "Type",
    renderRow: ({ type }) => <Typography size="small">{type}</Typography>,
  },
  {
    key: "defVault",
    title: "Default",
    widthProps: {
      width: "130px",
    },
    renderRow: ({ defVault }) => (
      <Typography size="small">{defVault}</Typography>
    ),
  },
];

export const getCommonCompApiRows = (
  compName: string
): CompApiPropsRowType[] => [
  {
    propName: "className",
    required: false,
    type: "string",
    defVault: "",
  },
  {
    propName: "name",
    required: false,
    type: "string",
    defVault: compName,
  },
  {
    propName: "testId",
    required: false,
    type: "string",
    defVault: compName,
  },
];
