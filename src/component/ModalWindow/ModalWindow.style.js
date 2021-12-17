import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
`;

export const StyledBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 290px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;

  border: 2px solid #022d5e;
  border-radius: 15px;
  background-color: #aacdf4;
  padding: 35px 10px 10px 10px;
  box-shadow: 0px 0px 15px 15px rgba(255, 255, 255, 0.2);
`;
