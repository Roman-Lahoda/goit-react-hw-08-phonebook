import { useState } from "react";
import authOperation from "../../redux/auth/auth-operation";
import { useDispatch } from "react-redux";

import s from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <h3 className={s.title}>Enter to phonebook</h3>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email"
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
            className={s.input}
          />
        </label>
        <button type="submit" className={s.btn}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
