// import s from "./App.module.css";
// import ContactsForm from "./component/ContactsForm";
// import Filter from "./component/Filter";
// import ContactsList from "./component/ContactsList";
// import RegistrationFrom from "./component/RegistrationForm/RegistrationFrom";
// import LoginForm from "./component/LoginForm/LoginForm";

// import Appbar from "./component/Appbar/Appbar";
import Contacts from "./component/Contacts/Contacts";

// import { connect, useSelector, useDispatch } from "react-redux";
// import {
//   getStatusLoading,
//   getContacts,
// } from "./redux/contacts/contacts-selectors";
// import authSelectors from "./redux/auth/auth-selector";
// import { logOut, refresh } from "./redux/auth/auth-operation";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";

function App() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const name = useSelector(authSelectors.getUserName);
  // const dispatch = useDispatch();
  // const logout = () => {
  //   dispatch(logOut());
  // };
  // console.log(name);
  // console.log("isLoggedIn", isLoggedIn);

  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch]);

  // const contacts = useSelector(getContacts);
  // const statusLoading = useSelector(getStatusLoading);
  return (
    <>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Contacts />
      {/* {isLoggedIn ? (
        <>
          <h1>Hello, {name} </h1>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <>
          <RegistrationFrom />
          <LoginForm />
        </>
      )}
      <div className={s.phonebook}>
        <h1 className={s.pageTitle}>Phonebook</h1>
        <ContactsForm />
        {contacts.length > 0 && <h2 className={s.title}>Contacts</h2>}
        {statusLoading && <p className={s.loading}>Loading...</p>}
        {contacts.length > 1 && <Filter />}
        <ContactsList />
      </div> */}
    </>
  );
}

export default App;
