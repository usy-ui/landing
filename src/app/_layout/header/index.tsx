"use client";
import { useMemo, useState } from "react";

import {
  BrandDiscordIcon,
  BrandGithubIcon,
  Drawer,
  Scrollable,
  SunIcon,
  Tooltip,
  usySpacing,
} from "@usy-ui/base";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DocsHierarchy } from "@/components/docs/docs-hierarchy";

import {
  BrandLink,
  HeaderContainer,
  LogoAndNavContainer,
  MenuDrawerTriggerIcon,
  Navigation,
  NavItem,
  SearchDocsAndLinksContainer,
  SearchDocsInput,
} from "./header.styled";

export const Header = () => {
  const pathname = usePathname();
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

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

  const renderLogoAndNav = () => {
    return (
      <LogoAndNavContainer>
        <BrandLink href="/">
          <Image
            width={40}
            height={40}
            src="https://raw.githubusercontent.com/usy-ui/landing/refs/heads/main/public/favicon.png"
            alt="@usy-ui/base"
          />
        </BrandLink>
        <MenuDrawerTriggerIcon
          width="24px"
          height="24px"
          onClick={() => setIsMenuDrawerOpen(!isMenuDrawerOpen)}
        />
        <Navigation>
          {routing.map(({ url, label, isActive }) => (
            <NavItem key={url} href={url} $isActive={isActive}>
              {label}
            </NavItem>
          ))}
        </Navigation>
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

  return (
    <>
      {isMenuDrawerOpen && (
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
            <DocsHierarchy onItemClick={() => setIsMenuDrawerOpen(false)} />
          </Scrollable>
        </Drawer>
      )}
      <HeaderContainer>
        {renderLogoAndNav()}
        {renderSearchDocsAndLinks()}
      </HeaderContainer>
    </>
  );
};
