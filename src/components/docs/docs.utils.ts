import { SupportedComponentType } from "./../../@types/comp.type";

export const getCompSourceUrl = (compName: SupportedComponentType) => {
  return `${process.env.GITHUB_URL}/tree/main/src/components/${compName}`;
};

export const getReportIssueUrl = (compName: SupportedComponentType) => {
  return `${process.env.GITHUB_URL}/issues/new?title=[${compName}]%20Issue`;
};
