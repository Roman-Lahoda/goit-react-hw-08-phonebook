import { useSelector, useDispatch } from "react-redux";

import authOperation from "../../redux/auth/auth-operation";
import authSelectors from "../../redux/auth/auth-selector";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserName);

  const logout = () => {
    dispatch(authOperation.logOut());
  };

  return (
    <>
      <p className={s.text}>Hello, {name}</p>
      <button onClick={logout} className={s.btn}>
        Log out
      </button>
    </>
  );
};

export default UserMenu;
