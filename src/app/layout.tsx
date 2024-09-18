import { FC } from "react";

import type { Metadata } from "next";

import { fontPoppins } from "@/constants/fonts.constants";
import StyledComponentsRegistry from "@/lib/styled.registry";

import "usy-ui/dist/styles.css";
import { Header } from "./_layout/header";
import { Main } from "./_layout/main";

export const metadata: Metadata = {
  title: "usy-ui",
  description: "A lightweight UI components for ReactJS and NextJS",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={fontPoppins.className}>
        <StyledComponentsRegistry>
          <Header />
          <Main>{children}</Main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
