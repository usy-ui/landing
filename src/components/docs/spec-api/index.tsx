"use client";
import { FC, useMemo } from "react";

import {
  PanelTitle,
  Table,
  TableColumnType,
  Typography,
  usySpacing,
} from "usy-ui";

import {
  BadgePropName,
  RequiredIcon,
  SpecApiContainer,
} from "./spec-api.styled";

export type SpecApiPropsRowType = {
  propName: string;
  required: boolean;
  type: string;
  defVault: string;
};

type SpecApiProps = {
  description?: string;
  dataRows: SpecApiPropsRowType[];
};

const propsColumns: TableColumnType<SpecApiPropsRowType>[] = [
  {
    key: "propName",
    title: "Prop",
    renderRow: ({ propName }) => <BadgePropName>{propName}</BadgePropName>,
  },
  {
    key: "required",
    title: "Required",
    widthProps: {
      width: "130px",
    },
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

export const SpecApi: FC<SpecApiProps> = ({ description, dataRows }) => {
  const flattenDataRows = useMemo(
    () =>
      dataRows.map(({ defVault, ...restProps }) => ({
        ...restProps,
        defVault: defVault ? defVault : "-",
      })),
    [dataRows]
  );

  return (
    <SpecApiContainer>
      <PanelTitle
        title="API Reference"
        description={description}
        size="huge"
        marginProps={{ marginBottom: usySpacing.px20 }}
      />
      <Table
        rowKey="propName"
        columns={propsColumns}
        dataRows={flattenDataRows}
      />
    </SpecApiContainer>
  );
};
