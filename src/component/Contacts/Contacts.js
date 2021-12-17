import { Switch } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import authSelectors from "../../redux/auth/auth-selector";
import authOperation from "../../redux/auth/auth-operation.js";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import UserMenu from "../UserMenu/UserMenu";

import { AppBar, Menu, IconButton, CircularProgress } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { StyledNavLink, StyledToolbar, StyledBox } from "./Contacts.style";

const HomePage = lazy(() =>
  import("../../pages/HomePage/HomePage.js" /* webpackChunkName: "HomePage" */)
);
const PhonebookPage = lazy(() =>
  import(
    "../../pages/PhonebookPage/PhonebookPage.js" /* webpackChunkName: "PhonebookPage" */
  )
);
const RegisterPage = lazy(() =>
  import(
    "../../pages/RegisterPage/RegisterPage.js" /* webpackChunkName: "RegisterPage" */
  )
);
const LoginPage = lazy(() =>
  import(
    "../../pages/LoginPage/LoginPage.js" /* webpackChunkName: "LoginPage" */
  )
);

const Contacts = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsfetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperation.refresh());
  }, [dispatch]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar position="static">
          <StyledToolbar>
            <ul>
              {isLoggedIn ? (
                <li>
                  <StyledNavLink exact to="/contacts" activeClassName="active">
                    <ContactsIcon sx={{ width: 20, height: 20 }} />
                    Phonebook
                  </StyledNavLink>
                </li>
              ) : (
                <li>
                  <StyledNavLink exact to="/" activeClassName="active">
                    <HomeIcon sx={{ width: 20, height: 20 }} />
                    Home
                  </StyledNavLink>
                </li>
              )}
            </ul>
            {!isLoggedIn ? (
              <ul>
                <li>
                  <StyledNavLink exact to="/register" activeClassName="active">
                    <AppRegistrationIcon sx={{ width: 20, height: 20 }} />
                    Registration
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink exact to="/login" activeClassName="active">
                    <LoginIcon sx={{ width: 20, height: 20 }} />
                    Login
                  </StyledNavLink>
                </li>
              </ul>
            ) : (
              <>
                <IconButton>
                  <AccountCircleIcon
                    onClick={handleMenu}
                    sx={{
                      width: 24,
                      height: 24,
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <UserMenu />
                </Menu>
              </>
            )}
          </StyledToolbar>
        </AppBar>

        <Suspense
          fallback={
            <StyledBox>
              <CircularProgress />
            </StyledBox>
          }
        >
          <Switch>
            <PublicRoute exact redirectTo="/contacts" restricted path="/">
              <HomePage />
            </PublicRoute>

            <PrivateRoute exact redirectTo="/login" path="/contacts">
              <PhonebookPage />
            </PrivateRoute>

            <PublicRoute
              exact
              redirectTo="/contacts"
              restricted
              path="/register"
            >
              <RegisterPage />
            </PublicRoute>

            <PublicRoute exact redirectTo="/contacts" restricted path="/login">
              <LoginPage />
            </PublicRoute>
          </Switch>
        </Suspense>
      </>
    )
  );
};

export default Contacts;
