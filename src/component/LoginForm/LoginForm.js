import { useState } from "react";
import authOperation from "../../redux/auth/auth-operation";
import { useDispatch } from "react-redux";

import { StyledTypography, StyledForm, StyledButton } from "./LoginForm.style";
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <StyledTypography variant="h6" component="h3">
        Login form
      </StyledTypography>
      <StyledForm onSubmit={handleSubmit} sx={{ width: "100%" }}>
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
        <StyledButton variant="contained" type="submit" endIcon={<LoginIcon />}>
          Sign up
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default LoginForm;
