import { Accordion, Panel, ParagraphHeading } from "usy-ui";

import { QUESTIONS } from "./constants";

export const FAQ = () => {
  return (
    <Panel
      title={
        <ParagraphHeading
          title="FAQ"
          description="A list of tech stacks for a new frontend developer"
        />
      }
    >
      <Accordion items={QUESTIONS} />
    </Panel>
  );
};
