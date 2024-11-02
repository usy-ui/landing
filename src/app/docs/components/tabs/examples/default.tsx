"use client";
import { useMemo } from "react";

import { Tabs, Typography } from "@usy-ui/base";

export const Default = () => {
  const tabsMemo = useMemo(
    () => [
      {
        id: "tab-1",
        label: "Tab 1",
        content: <Typography>This is tab 2</Typography>,
      },
      {
        id: "tab-2",
        label: "Tab 2",
        content: <Typography>This is tab 2</Typography>,
      },
      {
        id: "tab-3",
        label: "Tab 3",
        content: <Typography>This is tab 3</Typography>,
      },
    ],
    []
  );

  return <Tabs tabs={tabsMemo} tabId="tab-3" />;
};
