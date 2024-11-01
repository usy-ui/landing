"use client";
import { FC, useMemo } from "react";

import {
  Badge,
  Box,
  ParagraphHeading,
  Table,
  TableColumnType,
  Typography,
  usySpacing,
} from "@usy-ui/base";

import { QUICK_NAV_MAIN_TO_MAIN_SPACING } from "@/constants/layout.constants";

import { DocsQuickNavMainItemConst } from "../constants";

import { RequiredIcon } from "./apis-section.styled";
import { APIsSectionRowType } from "./apis-section.types";

/**
 * Constants
 */

const ApiSectionColumnsConst: TableColumnType<APIsSectionRowType>[] = [
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

/**
 * Component
 */

type ApisSectionProps = {
  description?: string;
  dataRows: APIsSectionRowType[];
};

export const ApisSection: FC<ApisSectionProps> = ({
  description = "Comprehensive documentation of available properties, methods and APIs",
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
        columns={ApiSectionColumnsConst}
        dataRows={flattenDataRows}
        styles={{}}
      />
    </Box>
  );
};
