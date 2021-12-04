import { useSelector } from "react-redux";

import ContactsForm from "../../component/ContactsForm";
import Filter from "../../component/Filter";
import ContactsList from "../../component/ContactsList";
import {
  getContacts,
  getStatusLoading,
} from "../../redux/contacts/contacts-selectors";
import s from "./PhonebookPage.module.css";

const PhonebookPage = () => {
  const contacts = useSelector(getContacts);
  const statusLoading = useSelector(getStatusLoading);

  return (
    <>
      <p className={s.title}>Add new contact</p>
      <ContactsForm />
      {contacts.length > 0 && <h2 className={s.title}>Contacts</h2>}
      {statusLoading && <p>Loading phonebook...</p>}
      {contacts.length > 1 && <Filter />}
      <ContactsList />
    </>
  );
};

export default PhonebookPage;
