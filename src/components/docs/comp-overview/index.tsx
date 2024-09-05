"use client";
import { FC } from "react";

import {
  ArrowRightIcon,
  Copyable,
  Flex,
  ParagraphHeading,
  usySpacing,
} from "usy-ui";

import { QuickNavCompMainItemConst } from "../_constants/comp.constants";

import { Link } from "./comp-overview.styled";

type CompOverviewProps = {
  name: string;
  description: string;
  viewSourceUrl: string;
  reportAnIssueUrl: string;
  importCommand: string;
};

export const CompOverview: FC<CompOverviewProps> = ({
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
        size="gigant-1"
        marginProps={{ marginBottom: usySpacing.px20 }}
      />
      <Flex
        id={QuickNavCompMainItemConst.overview.sectionId}
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
      <Copyable text={importCommand} widthProps={{ maxWidth: "400px" }} />
    </>
  );
};
