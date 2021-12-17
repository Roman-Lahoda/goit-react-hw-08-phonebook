import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Toolbar, Box } from "@mui/material";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  border-radius: 10px;

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.2);
  }
`;

export const StyledToolbar = styled(Toolbar)`
  padding: 0 5px;
  ul {
    display: flex;
    list-style: none;
  }
  ul:not(:last-child) {
    flex-grow: 2;
  }
  li {
    margin: 0 5px;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  padding: 20px;
  justify-content: center;
`;
