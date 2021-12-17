import { useSelector, useDispatch } from "react-redux";

import LogoutIcon from "@mui/icons-material/Logout";

import authOperation from "../../redux/auth/auth-operation";
import authSelectors from "../../redux/auth/auth-selector";

import { StyledModal } from "./UserMenu.style";
import userPhoto from "../../images/user_photo.gif";

const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);

  const logout = () => {
    dispatch(authOperation.logOut());
  };

  return (
    <StyledModal>
      <p className="title">Your profile</p>
      <img src={userPhoto} alt="user_photo" />
      <p className="subtitle">Name</p>
      <p>{name}</p>
      <p className="subtitle">Email</p>
      <p>{email}</p>
      <button onClick={logout} style={{ marginBottom: "-5px" }}>
        <LogoutIcon sx={{ color: "#000" }} />
        Log out
      </button>
    </StyledModal>
  );
};

export default UserMenu;
