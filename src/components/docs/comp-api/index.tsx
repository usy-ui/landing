"use client";
import { FC, useMemo } from "react";

import { Box, PanelTitle, Table, usySpacing } from "usy-ui";

import { QUICK_NAV_MAIN_TO_MAIN_SPACING } from "@/constants/layout.constants";

import { QuickNavCompMainItemConst } from "../_constants/comp.constants";

import { propsColumns } from "./comp-api.constants";

export type CompApiPropsRowType = {
  propName: string;
  required: boolean;
  type: string;
  defVault: string;
};

type CompApiProps = {
  description?: string;
  dataRows: CompApiPropsRowType[];
};

export const CompApi: FC<CompApiProps> = ({ description, dataRows }) => {
  const flattenDataRows = useMemo(
    () =>
      dataRows.map(({ defVault, ...restProps }) => ({
        ...restProps,
        defVault: defVault ? defVault : "-",
      })),
    [dataRows]
  );

  return (
    <Box
      id={QuickNavCompMainItemConst.apiReference.sectionId}
      marginProps={{ marginTop: QUICK_NAV_MAIN_TO_MAIN_SPACING }}
    >
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
    </Box>
  );
};
