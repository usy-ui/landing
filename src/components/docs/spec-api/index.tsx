"use client";
import { FC, useMemo } from "react";

import { PanelTitle, Table, usySpacing } from "usy-ui";

import { propsColumns } from "./spec-api.constants";
import { SpecApiContainer } from "./spec-api.styled";

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
