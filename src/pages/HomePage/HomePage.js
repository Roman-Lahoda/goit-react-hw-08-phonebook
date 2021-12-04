import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <h1 className={s.text}>Hello, dear User!</h1>
      <h3 className={s.text}>Enjoy using this phone book</h3>
      <p className={`${s.text} ${s.textBelow}`}>
        Now this page is ampty ,but maybe soon you will can see something
        interesting there ;)
      </p>
    </>
  );
};

export default HomePage;
