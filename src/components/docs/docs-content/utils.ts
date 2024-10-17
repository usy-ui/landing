export const getCompSourceUrl = (compName: string) => {
  return `${process.env.GITHUB_URL}/tree/main/src/components/${compName}`;
};

export const getReportIssueUrl = (compName: string) => {
  return `${process.env.GITHUB_URL}/issues/new?title=[${compName}]%20Issue`;
};

export const getImportCommand = (comp: string) => {
  return `import { ${comp} } from "@usy-ui/base"`;
};
