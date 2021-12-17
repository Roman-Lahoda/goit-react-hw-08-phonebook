import styled from "@emotion/styled";
import { Typography, Button } from "@mui/material";

export const StyledTypography = styled(Typography)`
  text-align: center;
  margin-bottom: 10px;
`;

export const StyledForm = styled.form`
  //   width: 300px;
  //   margin-left: auto;
  //   margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  display: flex;
  margin: 10px auto 0 auto;
  border-radius: 10px;
  font-size: 12px;
  background-color: #528ffe;
  color: #fff;

  :hover {
    transform: scale(1.1);
    background-color: #528ffe;
  }
`;
