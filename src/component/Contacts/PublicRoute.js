import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import authSelector from "../../redux/auth/auth-selector";

const PublicRoute = ({
  children,
  redirectTo = "/",
  restricted = false,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
