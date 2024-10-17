"use client";
import { FC, useMemo } from "react";

import { Box, ParagraphHeading, Table, usySpacing } from "@usy-ui/base";

import { QUICK_NAV_MAIN_TO_MAIN_SPACING } from "@/constants/layout.constants";

import { DocsQuickNavMainItemConst } from "../constants";

import { getApisSectionColumnProps } from "./helpers/get-apis-section-column-props";
import { APIsSectionRowType } from "./types";

type ApisSectionProps = {
  description?: string;
  dataRows: APIsSectionRowType[];
};

export const ApisSection: FC<ApisSectionProps> = ({
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
      id={DocsQuickNavMainItemConst.apiReference.sectionId}
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
        columns={getApisSectionColumnProps()}
        dataRows={flattenDataRows}
        styles={{}}
      />
    </Box>
  );
};
