import LoginForm from "../../component/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={s.box}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
