import { useState } from "react";
import authOperation from "../../redux/auth/auth-operation";
import { useDispatch } from "react-redux";

import {
  StyledTypography,
  StyledForm,
  StyledButton,
} from "./RegistrationForm.style";
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import notification from "../../utils/notification";

const RegistrationFrom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const passwordSame = password === repeatPassword;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (!passwordSame) {
      e.preventDefault();
      return notification.error("Password not the same");
    }
    e.preventDefault();
    dispatch(authOperation.signUp({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowRepeatPassword = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <StyledTypography variant="h6" component="h3">
        Registration form
      </StyledTypography>
      <StyledForm onSubmit={handleSubmit} sx={{ width: "100%" }}>
        <TextField
          sx={{ mt: 1 }}
          id="name"
          name="name"
          label="Name"
          type="text"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="off"
        />
        <TextField
          sx={{ mt: 1 }}
          id="email"
          name="email"
          label="Email"
          type="text"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
        />
        <FormControl sx={{ mt: 1 }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ mt: 2 }} variant="outlined">
          <InputLabel htmlFor="repeatPassword">Repeat password</InputLabel>
          <OutlinedInput
            id="repeatPassword"
            type={showRepeatPassword ? "text" : "password"}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRepeatPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Repeat password"
          />
        </FormControl>
        <StyledButton
          variant="contained"
          type="submit"
          endIcon={<HowToRegIcon />}
        >
          Sign up
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default RegistrationFrom;
