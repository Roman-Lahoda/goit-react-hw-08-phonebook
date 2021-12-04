import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import authSelector from "../../redux/auth/auth-selector";

const PrivateRoute = ({ children, redirectTo = "/login", ...routeProps }) => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  //   console.log(routeProps);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
