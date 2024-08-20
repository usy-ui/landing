"use client";
import { FC, ReactNode, useMemo } from "react";

import { usePathname } from "next/navigation";
import { Flex } from "usy-ui";

import { MenuHierarchy, MenuItemType } from "./constants";
import {
  DocsContainer,
  MenuHeading,
  MenuHierarchyContainer,
  MenuItem,
  MenuScrollableContainer,
} from "./layout.styled";

type DocsLayoutProps = {
  children: ReactNode;
};

const DocsLayout: FC<DocsLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const flattenItems = useMemo(() => {
    return MenuHierarchy.reduce((acc, item) => {
      const subItems = (item.items || []).map((subItem) => ({
        ...subItem,
        url: `/docs/${item.id}/${subItem.id}`,
      }));

      acc.push(item);
      acc = acc.concat(subItems);
      return acc;
    }, [] as MenuItemType[]);
  }, []);

  const renderMenuHierarchy = () => {
    const itemComponents = flattenItems.map((item) => {
      if ((item.items || []).length > 0) {
        return <MenuHeading key={item.id}>{item.label}</MenuHeading>;
      }

      return (
        <MenuItem
          key={item.id}
          href={item.url || ""}
          $isActivated={pathname.endsWith(item.id)}
        >
          {item.label}
        </MenuItem>
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
