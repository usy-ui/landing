"use client";
import { FC } from "react";

import {
  ArrowRightIcon,
  Copyable,
  Flex,
  ParagraphHeading,
  usySpacing,
} from "@usy-ui/base";

import { DocsQuickNavMainItemConst } from "../constants";

import { Link } from "./styled";

type OverviewSectionProps = {
  name: string;
  description: string;
  viewSourceUrl: string;
  reportAnIssueUrl: string;
  importCommand: string;
};

export const OverviewSection: FC<OverviewSectionProps> = ({
  name,
  description,
  viewSourceUrl,
  reportAnIssueUrl,
  importCommand,
}) => {
  return (
    <>
      <ParagraphHeading
        title={name}
        description={description}
        titleSize="gigant-1"
        marginProps={{ marginBottom: usySpacing.px20 }}
      />
      <Flex
        id={DocsQuickNavMainItemConst.overview.sectionId}
        gap={usySpacing.px32}
        marginProps={{ marginBottom: usySpacing.px20 }}
      >
        <Link href={viewSourceUrl} target="_blank">
          View source <ArrowRightIcon />
        </Link>
        <Link href={reportAnIssueUrl} target="_blank">
          Report an issue <ArrowRightIcon />
        </Link>
      </Flex>
      <Copyable text={importCommand} />
    </>
  );
};
