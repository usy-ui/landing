"use client";
import { FC, useMemo } from "react";

import { Box, ParagraphHeading, Table, usySpacing } from "@usy-ui/base";

import { QUICK_NAV_MAIN_TO_MAIN_SPACING } from "@/constants/layout.constants";

import { CompQuickNavMainItemConst } from "../constants";

import { propsColumns } from "./constants";

export type CompApisRowType = {
  propName: string;
  required: boolean;
  type: string;
  defVault: string;
};

type CompApisSectionProps = {
  description?: string;
  dataRows: CompApisRowType[];
};

export const CompApisSection: FC<CompApisSectionProps> = ({
  description,
  dataRows,
}) => {
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
      id={CompQuickNavMainItemConst.apiReference.sectionId}
      marginProps={{ marginTop: QUICK_NAV_MAIN_TO_MAIN_SPACING }}
    >
      <ParagraphHeading
        title="API Reference"
        description={description}
        titleSize="huge"
        marginProps={{ marginBottom: usySpacing.px20 }}
      />
      <Table
        rowKey="propName"
        columns={propsColumns}
        dataRows={flattenDataRows}
        styles={{}}
      />
    </Box>
  );
};
