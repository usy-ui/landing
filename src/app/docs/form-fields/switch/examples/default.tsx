import { Switch } from "@usy-ui/base";

export const Default = () => {
  return (
    <>
      <Switch name="default-apply" label="Apply" />
      <Switch name="default-disabled" label="Disabled" disabled />
    </>
  );
};
