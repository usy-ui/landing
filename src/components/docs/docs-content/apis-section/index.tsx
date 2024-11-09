"use client";
import { FC, useMemo } from "react";

import {
  Badge,
  Box,
  InfoCircleIcon,
  ParagraphHeading,
  Scrollable,
  Table,
  TableColumnType,
  Tooltip,
  Typography,
  usyBreakpoint,
  usySpacing,
} from "@usy-ui/base";

import { QUICK_NAV_MAIN_TO_MAIN_SPACING } from "@/constants/layout.constants";
import { useWindowWidth } from "@/hooks/useWindowWidth";

import { DocsQuickNavMainItemConst } from "../constants";

import { RequiredIcon } from "./apis-section.styled";
import { APIsSectionRowType } from "./apis-section.types";

/**
 * Constants
 */

const ApiSectionColumnsConst: TableColumnType<APIsSectionRowType>[] = [
  {
    key: "propName",
    title: "Property",
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
    key: "defaultVal",
    title: "Default",
    widthProps: {
      width: "130px",
    },
    renderRow: ({ defaultVal }) => (
      <Typography size="small">{defaultVal}</Typography>
    ),
  },
  {
    key: "desc",
    title: "Description",
    widthProps: {
      width: "110px",
    },
    renderRow: ({ desc }) =>
      typeof desc === "string" ? (
        <Tooltip content={desc}>
          <InfoCircleIcon />
        </Tooltip>
      ) : (
        "-"
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
  const windowWidth = useWindowWidth();
  const tabletBreakpoint = parseInt(usyBreakpoint.tablet.replace("px", ""));

  const flattenDataRows = useMemo(
    () =>
      dataRows.map(({ defaultVal, ...restProps }) => ({
        ...restProps,
        defaultVal: defaultVal ? defaultVal : "-",
      })),
    [dataRows]
  );

  /**
   * Render
   */

  const renderTable = () => {
    if (windowWidth < tabletBreakpoint) {
      return (
        <Scrollable
          scrollType="horizontal"
          paddingProps={{ padding: `${usySpacing.px10} 0` }}
          widthProps={{ maxWidth: "100vw" }}
        >
          <Table
            rowKey="propName"
            columns={ApiSectionColumnsConst}
            dataRows={flattenDataRows}
            styles={{ hideOuterBorder: true }}
            widthProps={{ minWidth: "600px" }}
          />
        </Scrollable>
      );
    }

    return (
      <Table
        rowKey="propName"
        columns={ApiSectionColumnsConst}
        dataRows={flattenDataRows}
        styles={{ hideOuterBorder: true }}
        widthProps={{ minWidth: "600px" }}
      />
    );
  };

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
      {renderTable()}
    </Box>
  );
};
