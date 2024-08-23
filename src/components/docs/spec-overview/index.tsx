import { FC } from "react";

import { ArrowRightIcon, Copyable, Flex, PanelTitle, usySpacing } from "usy-ui";

import { Link } from "./spec-overview.styled";

type SpecOverviewProps = {
  compName: string;
  compDescription: string;
  viewSourceUrl: string;
  reportAnIssueUrl: string;
  importCommand: string;
};

export const SpecOverview: FC<SpecOverviewProps> = ({
  compName,
  compDescription,
  viewSourceUrl,
  reportAnIssueUrl,
  importCommand,
}) => {
  return (
    <>
      <PanelTitle
        title={compName}
        description={compDescription}
        size="gigant-1"
        marginProps={{ marginBottom: usySpacing.px20 }}
      />
      <Flex
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
