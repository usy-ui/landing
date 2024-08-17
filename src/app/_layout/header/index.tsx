"use client";
import { useMemo } from "react";

import { BrandGithubIcon, SunIcon } from "@usy-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        url: "/playground",
        label: "Playground",
        isActive: pathname.startsWith("/playground"),
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
        <Link href="https://github.com/usy-ui/themes" target="_blank">
          <BrandGithubIcon width="24px" height="24px" />
        </Link>
        <SunIcon width="24px" height="24px" />
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
