import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
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
