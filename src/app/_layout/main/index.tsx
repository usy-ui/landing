import { FC, ReactNode } from "react";

import { MainContainer } from "./main.styled";

type MainProps = {
  children: ReactNode;
};

export const Main: FC<MainProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};
