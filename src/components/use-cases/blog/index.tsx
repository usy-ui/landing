import { Accordion, Panel, ParagraphHeading } from "usy-ui";

import { QUESTIONS } from "./constants";

export const Blog = () => {
  return (
    <Panel
      title={
        <ParagraphHeading
          title="Blog"
          description="A list of tech stacks for a new frontend developer"
        />
      }
    >
      <Accordion items={QUESTIONS} />
    </Panel>
  );
};
