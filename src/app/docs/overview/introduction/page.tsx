import { Panel, PanelTitle } from "usy-ui";

const Introduction = () => {
  return (
    <>
      <Panel
        title={
          <PanelTitle
            title="Introduction"
            description="An open-source UI component library for building high-quality, accessible design systems and web apps."
            size="gigant-1"
          />
        }
        hasBorder={false}
      >
        Usy-UI is a low-level UI component library with a focus on
        accessibility, customization and developer experience. You can use these
        components either as the base layer of your design system, or adopt them
        incrementally.
      </Panel>
    </>
  );
};

export default Introduction;
