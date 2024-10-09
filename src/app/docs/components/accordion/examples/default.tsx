import { Accordion } from "@usy-ui/base";

export const Default = () => {
  return (
    <Accordion
      items={[
        { id: "panel-1", title: "Panel 1", content: "This is panel 1" },
        { id: "panel-2", title: "Panel 2", content: "This is panel 2" },
        { id: "panel-3", title: "Panel 3", content: "This is panel 3" },
      ]}
    />
  );
};
