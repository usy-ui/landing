import { Panel, ParagraphHeading, Tabs, usySpacing } from "usy-ui";

import { Overview } from "./overview";

export const Crypto = () => {
  return (
    <Panel
      title={
        <ParagraphHeading
          title="Crypto Market"
          description="Start trading and diversify your assets"
          titleSize="huge"
          marginProps={{ marginBottom: usySpacing.px20 }}
        />
      }
    >
      <Tabs
        tabs={[
          {
            id: "tab-overview",
            label: "Overview",
            content: <Overview />,
          },
          {
            id: "tab-your-holding",
            label: "Your holdings",
            content: <div>This is tab 2</div>,
          },
          {
            id: "tab-transaction-history",
            label: "Transaction History",
            content: <div>This is tab 3</div>,
          },
        ]}
      />
    </Panel>
  );
};
