import { FC } from "react";

import { Toast } from "@usy-ui/base";
import type { Metadata } from "next";

import { fontPoppins } from "@/constants/fonts.constants";
import StyledComponentsRegistry from "@/lib/styled.registry";
import "@usy-ui/base/dist/styles.css";

import { Header } from "./_layout/header";
import { Main } from "./_layout/main";

export const metadata: Metadata = {
  title: "@usy-ui/base",
  description: "A lightweight UI components for ReactJS and NextJS",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/usy-ui/landing/c9b1b390b9c27a6c50b6257cad1e656818a5b127/public/favicon.svg"
          sizes="any"
        />
        <title>Usy UI</title>
      </head>
      <body className={fontPoppins.className}>
        <StyledComponentsRegistry>
          <Header />
          <Main>{children}</Main>
          <Toast />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
