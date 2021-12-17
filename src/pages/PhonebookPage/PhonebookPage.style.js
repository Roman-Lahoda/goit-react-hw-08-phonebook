import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

export const Container = styled.div`
  padding: 15px 0;

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  h3 {
    text-align: center;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  margin: 0 auto 20px auto;
  border-radius: 10px;
  font-size: 12px;
  background-color: #528ffe;
  color: #fff;

  :hover {
    transform: scale(1.1);
    background-color: #528ffe;
  }
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  margin: 20px auto;
  padding: 10px;
  // border: 1px solid red;
  width: 250px;
  // border: 2px solid #022d5e;
  border-radius: 15px;
  // background-color: #aacdf4;
  padding: 10px 10px 10px 10px;
  box-shadow: 0px 0px 15px 15px rgba(255, 255, 255, 0.2);
`;
