"use client";
import { FC, ReactNode, useMemo } from "react";

import { Flex, Scrollable } from "@usy-ui/themes";
import { usePathname } from "next/navigation";

import { HEADER_HEIGHT, MAIN_PADDING_TOP } from "@/constants/layout.constants";

import { MenuHierarchy, MenuItemType } from "./constants";
import {
  DocsContainer,
  MenuHierarchyContainer,
  MenuItem,
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
      return (
        <MenuItem
          key={item.id}
          href={item.url || ""}
          $isHighligh={(item.items || []).length > 0}
          $isActivated={pathname.endsWith(item.id)}
        >
          {item.label}
        </MenuItem>
      );
    });

    return <MenuHierarchyContainer>{itemComponents}</MenuHierarchyContainer>;
  };

  return (
    <DocsContainer>
      <Scrollable
        widthProps={{ width: "300px" }}
        heightProps={{
          maxHeight: `calc(100vh - ${HEADER_HEIGHT} - ${MAIN_PADDING_TOP} - 40px)`,
        }}
      >
        {renderMenuHierarchy()}
      </Scrollable>
      <Flex grow={1}>{children}</Flex>
    </DocsContainer>
  );
};

export default DocsLayout;
