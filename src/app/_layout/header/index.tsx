import {
  BrandGithubIcon,
  Flex,
  Input,
  SunIcon,
  usySpacing,
} from "@usy-ui/themes";
import Image from "next/image";
import Link from "next/link";

import {
  HeaderContainer,
  LogoAndNavContainer,
  Navigation,
  NavItem,
  SearchDocsAndLinksContainer,
  SearchDocsInput,
} from "./header.styled";

export const Header = () => {
  const renderLogoAndNav = () => {
    return (
      <LogoAndNavContainer>
        <Link href="/">
          <Image width={40} height={40} src="/favicon.svg" alt="usy-ui" />
        </Link>
        <Navigation>
          <NavItem href="/docs">Docs</NavItem>
          <NavItem href="/components">Components</NavItem>
          <NavItem href="/playground">Playground</NavItem>
          <NavItem href="/use-cases">Use Cases</NavItem>
          <NavItem href="/icons">Icons</NavItem>
          <NavItem href="/colors">Colors</NavItem>
        </Navigation>
      </LogoAndNavContainer>
    );
  };

  const renderSearchDocsAndLinks = () => {
    return (
      <SearchDocsAndLinksContainer>
        <SearchDocsInput>Search documents...</SearchDocsInput>
        <BrandGithubIcon width="24px" height="24px" />
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
