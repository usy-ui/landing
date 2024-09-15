"use client";
import { useState } from "react";

import {
  Button,
  Flex,
  Panel,
  ParagraphHeading,
  RefreshIcon,
  Tabs,
  Tooltip,
  Typography,
  usySpacing,
} from "usy-ui";

import { Overview } from "./overview";

const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });

export const Crypto = () => {
  const [isFetching, setIsFetching] = useState(false);

  const handleFetchData = async () => {
    setIsFetching(true);
    await fetchData();
    setIsFetching(false);
  };

  return (
    <Panel
      title={
        <Flex justifyContent="space-between" alignItems="center">
          <ParagraphHeading
            title="Crypto Market"
            description="Start trading and diversify your assets"
            titleSize="huge"
            marginProps={{ marginBottom: usySpacing.px20 }}
          />
          <Tooltip content="Refresh data">
            <Button variant="invisible" onClick={handleFetchData}>
              <RefreshIcon />
            </Button>
          </Tooltip>
        </Flex>
      }
    >
      <Tabs
        tabs={[
          {
            id: "tab-overview",
            label: "Overview",
            content: <Overview isFetching={isFetching} />,
          },
          {
            id: "tab-holding",
            label: "Holdings",
            content: (
              <Flex
                justifyContent="center"
                alignItems="center"
                heightProps={{ height: "100px" }}
              >
                <Typography>
                  This is <Typography tag="strong">Holdings</Typography> tab
                </Typography>
              </Flex>
            ),
          },
          {
            id: "tab-transaction",
            label: "Transaction",
            content: (
              <Flex
                justifyContent="center"
                alignItems="center"
                heightProps={{ height: "100px" }}
              >
                <Typography>
                  This is <Typography tag="strong">Transaction</Typography> tab
                </Typography>
              </Flex>
            ),
          },
        ]}
      />
    </Panel>
  );
};
