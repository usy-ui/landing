import { FC } from "react";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import StyledComponentsRegistry from "@/lib/styled.registry";

import "@usy-ui/themes/dist/styles.css";
import { Header } from "./_layout/header";
import { Main } from "./_layout/main";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

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
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Header />
          <Main>{children}</Main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
