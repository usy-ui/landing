"use client";
import { FC, ReactNode, useMemo } from "react";

import { usePathname } from "next/navigation";
import { Flex } from "usy-ui";

import { MenuHierarchyConst, MenuItemType } from "./layout.constants";
import {
  DocsContainer,
  MenuHeading,
  MenuHierarchyContainer,
  MenuItemLink,
  MenuScrollableContainer,
} from "./layout.styled";

type DocsLayoutProps = {
  children: ReactNode;
};

const DocsLayout: FC<DocsLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const flattenItems = useMemo(() => {
    return MenuHierarchyConst.reduce((acc, item) => {
      const subItems = (item.items || []).map((subItem) => ({
        ...subItem,
        url: `/docs/${item.url}/${subItem.url}`,
      }));

      acc.push(item);
      acc = acc.concat(subItems);
      return acc;
    }, [] as MenuItemType[]);
  }, []);

  /**
   * Render
   */

  const renderMenuHierarchy = () => {
    const itemComponents = flattenItems.map((item) => {
      if ((item.items || []).length > 0) {
        return <MenuHeading key={item.id}>{item.label}</MenuHeading>;
      }

      return (
        <MenuItemLink
          key={item.id}
          href={item.url || ""}
          $isActivated={pathname.endsWith(item.url)}
        >
          {item.label}
        </MenuItemLink>
      );
    });

    return (
      <MenuScrollableContainer>
        <MenuHierarchyContainer>{itemComponents}</MenuHierarchyContainer>
      </MenuScrollableContainer>
    );
  };

  const renderChildren = () => {
    return (
      <Flex direction="column" grow={1}>
        {children}
      </Flex>
    );
  };

  return (
    <DocsContainer>
      {renderMenuHierarchy()}
      {renderChildren()}
    </DocsContainer>
  );
};

export default DocsLayout;
