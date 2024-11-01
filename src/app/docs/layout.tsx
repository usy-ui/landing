import { FC, ReactNode } from "react";

import { Flex } from "@usy-ui/base";

import { DocsHierarchy } from "@/components/docs/docs-hierarchy";

import { DocsContainer, DocsHierarchyScrollable } from "./layout.styled";

type DocsLayoutProps = {
  children: ReactNode;
};

const DocsLayout: FC<DocsLayoutProps> = ({ children }) => {
  return (
    <DocsContainer>
      <DocsHierarchyScrollable>
        <DocsHierarchy />
      </DocsHierarchyScrollable>
      <Flex direction="column" widthProps={{ width: "100%" }}>
        {children}
      </Flex>
    </DocsContainer>
  );
};

export default DocsLayout;
