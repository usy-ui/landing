"use client";
import { useMemo } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandDiscordIcon, BrandGithubIcon, SunIcon, Tooltip } from "usy-ui";

import {
  HeaderContainer,
  LogoAndNavContainer,
  Navigation,
  NavItem,
  SearchDocsAndLinksContainer,
  SearchDocsInput,
} from "./header.styled";

export const Header = () => {
  const pathname = usePathname();
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
        <Link href="/">
          <Image width={40} height={40} src="/favicon.svg" alt="usy-ui" />
        </Link>
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
        <Link href={process.env.GITHUB_URL || ""} target="_blank">
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
    <HeaderContainer>
      {renderLogoAndNav()}
      {renderSearchDocsAndLinks()}
    </HeaderContainer>
  );
};
