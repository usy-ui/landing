import { Panel, ParagraphHeading, Typography } from "@usy-ui/base";

import { loremIpsumParagraph1 } from "@/mock/lorem-ipsum";

export const Default = () => {
  return (
    <Panel title={<ParagraphHeading title="User Profile" />}>
      <Typography>{loremIpsumParagraph1}</Typography>
    </Panel>
  );
};
