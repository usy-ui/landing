"use client";
import { FunctionComponent, useCallback, useEffect, useState } from "react";

import {
  Flex,
  GridIcon,
  Input,
  ListIcon,
  SearchIcon,
  Tooltip,
  usySpacing,
} from "@usy-ui/base";

import { ThumbIcon, ThumbIconType } from "@/components/icons/thumb-icon";

import jsonIcons from "./icons.json";
import {
  FilterContainer,
  GridLayoutButton,
  IconsListContainer,
  ListLayoutButton,
} from "./page.styled";

const Icons = () => {
  const [icons, setIcons] = useState<ThumbIconType[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const standardizeIcons = useCallback(async () => {
    const UsyUIModule = await import("@usy-ui/base");
    const mappedIcons = jsonIcons
      .filter(({ displayName }) => displayName.includes(searchText))
      .map(({ componentName, displayName }) => {
        const IconComp = UsyUIModule[
          componentName as keyof typeof UsyUIModule
        ] as FunctionComponent;

        return {
          element: <IconComp key={displayName} />,
          displayName,
          componentName,
        };
      });

    setIcons(mappedIcons);
  }, [searchText]);

  useEffect(() => {
    (async () => {
      await standardizeIcons();
    })();
  }, [standardizeIcons]);

  const handleSearchChange = (value: string) =>
    setSearchText(
      value
        .replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`)
        .replace(/^-/, "")
    );

  return (
    <>
      <FilterContainer>
        <Input
          widthProps={{ width: "350px" }}
          placeholder={`Search from ${jsonIcons.length} icons...`}
          iconLeft={<SearchIcon />}
          value={searchText}
          onChange={handleSearchChange}
        />
        <Flex
          display="inline-flex"
          alignItems="center"
          gap={usySpacing.px10}
          widthProps={{ width: "auto" }}
        >
          <Tooltip content="Show list layout">
            <ListLayoutButton variant="normal" noSole>
              <ListIcon width="32px" height="32px" />
            </ListLayoutButton>
          </Tooltip>
          <Tooltip content="Show grid layout">
            <GridLayoutButton variant="primary" noSole>
              <GridIcon />
            </GridLayoutButton>
          </Tooltip>
        </Flex>
      </FilterContainer>
      <IconsListContainer>
        {icons.map((icon) => (
          <ThumbIcon key={icon.displayName} icon={icon} />
        ))}
      </IconsListContainer>
    </>
  );
};

export default Icons;
