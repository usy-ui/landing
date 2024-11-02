"use client";
import { FC, useMemo } from "react";

import { ClockIcon, usyColor } from "@usy-ui/base";
import { usePathname } from "next/navigation";

import { MenuHierarchyConst } from "./docs-hierarchy.constants";
import {
  MenuHeading,
  MenuItemLink,
  MenuHierarchyContainer,
} from "./docs-hierarchy.styled";
import { MenuItemType } from "./docs-hierarchy.types";

type DocsHierarchyProps = {
  onItemClick?: () => void;
};

export const DocsHierarchy: FC<DocsHierarchyProps> = ({ onItemClick }) => {
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

  const renderItems = () => {
    return flattenItems.map((item) => {
      if ((item.items || []).length > 0) {
        return <MenuHeading key={item.id}>{item.label}</MenuHeading>;
      }

      return (
        <MenuItemLink
          key={item.id}
          href={item.url || ""}
          onClick={onItemClick}
          $isActivated={pathname.endsWith(item.url)}
        >
          {item.label}
          &nbsp;
          {item.hasWarning && <ClockIcon color={usyColor.amber} />}
        </MenuItemLink>
      );
    });
  };

  return <MenuHierarchyContainer>{renderItems()}</MenuHierarchyContainer>;
};
