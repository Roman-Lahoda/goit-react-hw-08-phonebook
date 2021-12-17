import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";

export const StyledTypigraphyMainText = styled(Typography)`
  text-align: center;
  //   color: red;
  //   text-shadow: 1px 1px 2px #474545;
`;

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;

  border: 2px solid #eb8a8a;
  border-radius: 15px;
  background-color: #aacdf4;
  padding: 10px;
  box-shadow: 0px 0px 15px 15px rgba(255, 255, 255, 0.2);
`;

export const StyledBoxBottom = styled(Typography)`
  position: absolute;
  //   top: 100%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  text-align: center;
`;
