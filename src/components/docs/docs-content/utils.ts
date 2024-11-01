import { QuickNavItemType } from "../docs-layout/docs-layout.types";

export const getCompSourceUrl = (
  compName: string,
  groupName?: "_Form" | "_Layout"
) => {
  return `${process.env.REPO_URL}/tree/main/src/components/${groupName || ""}/${compName}`;
};

export const getReportIssueUrl = (compName: string) => {
  return `${process.env.REPO_URL}/issues/new?title=[${compName}]%20Issue`;
};

export const getImportCommand = (comp: string) => {
  return `import { ${comp} } from "@usy-ui/base"`;
};

export const getSortedItemByOrder = (items: QuickNavItemType[]) =>
  items.sort((a, b) => a.order - b.order);
