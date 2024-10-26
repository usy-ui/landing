"use client";
import { Box, Typography, usyColor } from "@usy-ui/base";
import styled from "styled-components";

const StyledYellowBox = styled(Box)`
  background-color: ${usyColor.amber};
`;

const StyledGrassBox = styled(Box)`
  background-color: ${usyColor.grass};
`;

export const Default = () => {
  return (
    <>
      <StyledYellowBox
        tag="header"
        widthProps={{ width: "180px" }}
        paddingProps={{ padding: "20px" }}
      >
        <Typography size="small">tag: header</Typography>
        <Typography size="small">width: 180px</Typography>
        <Typography size="small">padding: 20px</Typography>
      </StyledYellowBox>
      <StyledGrassBox
        tag="footer"
        widthProps={{ width: "160px" }}
        heightProps={{ height: "160px" }}
        paddingProps={{ padding: "20px" }}
      >
        <Typography size="small">tag: footer</Typography>
        <Typography size="small">width: 160px</Typography>
        <Typography size="small">height: 160px</Typography>
        <Typography size="small">padding: 20px</Typography>
      </StyledGrassBox>
    </>
  );
};
