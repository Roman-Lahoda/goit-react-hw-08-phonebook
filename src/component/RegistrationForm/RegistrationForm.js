import { useState } from "react";
import authOperation from "../../redux/auth/auth-operation";
import { useDispatch } from "react-redux";
import s from "./RegistrationForm.module.css";

const RegistrationFrom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperation.signUp({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target: { name, value } }) => {
    // console.log(e.currentTarget);
    switch (name) {
      case "name":
        setName(value);
        break;
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
      <h3 className={s.title}>Registration</h3>
      <form onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="name"
            className={s.input}
          />
        </label>
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
          Sign up
        </button>
      </form>
    </>
  );
};

export default RegistrationFrom;
