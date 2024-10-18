"use client";
import { Badge, TableColumnType, Typography } from "@usy-ui/base";

import { RequiredIcon } from "../styled";
import { APIsSectionRowType } from "../types";

export const getApisSectionColumnProps =
  (): TableColumnType<APIsSectionRowType>[] => [
    {
      key: "propName",
      title: "Prop",
      renderRow: ({ propName }) => (
        <Badge variant="filled" radius="medium">
          {propName}
        </Badge>
      ),
    },
    {
      key: "required",
      title: "Required",
      renderRow: ({ required }) => (required ? <RequiredIcon /> : "-"),
    },
    {
      key: "type",
      title: "Type",
      renderRow: ({ type }) =>
        typeof type === "string" ? (
          <Typography size="small">{type}</Typography>
        ) : (
          type
        ),
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
