import { NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import authSelectors from "../../redux/auth/auth-selector";
import authOperation from "../../redux/auth/auth-operation.js";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import UserMenu from "../UserMenu/UserMenu";
import s from "./Contacts.module.css";

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
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsfetchingCurrentUser
  );
  console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperation.refresh());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <div className={s.AppBar}>
          <ul className={`${s.navigation} ${s.list}`}>
            {isLoggedIn ? (
              <li>
                <NavLink
                  exact
                  to="/contacts"
                  className={s.link}
                  activeClassName={s.activeLink}
                >
                  Phonebook
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  exact
                  to="/"
                  className={s.link}
                  activeClassName={s.activeLink}
                >
                  Home
                </NavLink>
              </li>
            )}
          </ul>
          {!isLoggedIn ? (
            <ul className={s.list}>
              <li>
                <NavLink
                  exact
                  to="/register"
                  className={s.link}
                  activeClassName={s.activeLink}
                >
                  Registration
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/login"
                  className={s.link}
                  activeClassName={s.activeLink}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          ) : (
            <UserMenu />
          )}
        </div>
        <Suspense fallback={<h1>Loading...test</h1>}>
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
