"use client";
import { useMemo, useState } from "react";

import {
  AlignLeftIcon,
  BrandDiscordIcon,
  BrandGithubIcon,
  Drawer,
  Flex,
  Scrollable,
  Separator,
  SunIcon,
  Tooltip,
  usyBreakpoints,
  usySpacing,
} from "@usy-ui/base";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DocsHierarchy } from "@/components/docs/docs-hierarchy";
import { useWindowWidth } from "@/hooks/useWindowWidth";

import {
  HeaderContainer,
  LogoAndNavContainer,
  NavItem,
  SearchDocsAndLinksContainer,
  SearchDocsInput,
} from "./header.styled";

export const Header = () => {
  const pathname = usePathname();
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const mainMenuBreakpoint = parseInt(usyBreakpoints.laptop.replace("px", ""));
  const docsMenuBreakpoint = parseInt(usyBreakpoints.tablet.replace("px", ""));

  const routing = useMemo(() => {
    return [
      {
        url: "/docs",
        label: "Docs",
        isActive: pathname.startsWith("/docs"),
      },
      {
        url: "/use-cases",
        label: "Use Cases",
        isActive: pathname.startsWith("/use-cases"),
      },
      {
        url: "/icons",
        label: "Icons",
        isActive: pathname.startsWith("/icons"),
      },
      {
        url: "/colors",
        label: "Colors",
        isActive: pathname.startsWith("/colors"),
      },
    ];
  }, [pathname]);

  /**
   * Render
   */

  const renderLogoOrCollapseMenuIcon = () => {
    if (windowWidth > mainMenuBreakpoint) {
      return (
        <Link href="/">
          <Image
            width={40}
            height={40}
            style={{
              minWidth: "40px",
              maxWidth: "40px",
              minHeight: "40px",
              maxHeight: "40px",
            }}
            src="https://raw.githubusercontent.com/usy-ui/landing/refs/heads/main/public/favicon.png"
            alt="@usy-ui/base"
          />
        </Link>
      );
    }

    return (
      <AlignLeftIcon
        width="24px"
        height="24px"
        onClick={() => setIsMenuDrawerOpen(!isMenuDrawerOpen)}
        style={{ cursor: "pointer" }}
      />
    );
  };

  const renderLogoAndNav = () => {
    return (
      <LogoAndNavContainer>
        {renderLogoOrCollapseMenuIcon()}
        {windowWidth > docsMenuBreakpoint && (
          <Flex
            alignItems="center"
            marginProps={{ marginLeft: usySpacing.px32 }}
          >
            {routing.map(({ url, label, isActive }) => (
              <NavItem key={url} href={url} $isActive={isActive}>
                {label}
              </NavItem>
            ))}
          </Flex>
        )}
      </LogoAndNavContainer>
    );
  };

  const renderSearchDocsAndLinks = () => {
    return (
      <SearchDocsAndLinksContainer>
        <SearchDocsInput>Search documents...</SearchDocsInput>
        <Link href={process.env.REPO_URL || ""} target="_blank">
          <Tooltip content="View Github" position="bottom">
            <BrandGithubIcon width="24px" height="24px" />
          </Tooltip>
        </Link>
        <Link href={process.env.DISCORD_URL || ""} target="_blank">
          <Tooltip content="Join Discord" position="bottom">
            <BrandDiscordIcon width="24px" height="24px" />
          </Tooltip>
        </Link>
        <Tooltip content="Change Theme" position="bottom">
          <SunIcon width="24px" height="24px" onClick={() => {}} />
        </Tooltip>
      </SearchDocsAndLinksContainer>
    );
  };

  const renderDocsHierarchyInMenu = () => {
    if (!isMenuDrawerOpen) {
      return null;
    }

    return (
      <Drawer
        side="left"
        widthProps={{ maxWidth: "300px" }}
        onClose={() => setIsMenuDrawerOpen(false)}
      >
        <Scrollable
          paddingProps={{
            paddingTop: usySpacing.px12,
            paddingBottom: usySpacing.px48,
            paddingLeft: usySpacing.px12,
          }}
        >
          {windowWidth < docsMenuBreakpoint && (
            <>
              <Flex
                direction="column"
                gap={usySpacing.px20}
                paddingProps={{ padding: `${usySpacing.px20} 0` }}
              >
                {routing.map(({ url, label, isActive }) => (
                  <NavItem
                    key={url}
                    href={url}
                    $isActive={isActive}
                    onClick={() => setIsMenuDrawerOpen(false)}
                  >
                    {label}
                  </NavItem>
                ))}
              </Flex>
              <Separator marginProps={{ margin: `${usySpacing.px10} 100px` }} />
            </>
          )}
          {pathname.startsWith("/docs") && (
            <DocsHierarchy onItemClick={() => setIsMenuDrawerOpen(false)} />
          )}
        </Scrollable>
      </Drawer>
    );
  };

  return (
    <>
      {renderDocsHierarchyInMenu()}
      <HeaderContainer>
        {renderLogoAndNav()}
        {renderSearchDocsAndLinks()}
      </HeaderContainer>
    </>
  );
};
