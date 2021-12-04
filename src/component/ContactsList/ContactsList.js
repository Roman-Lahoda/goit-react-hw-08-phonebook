import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { contactsOperations } from "../../redux/contacts";
import { contactsSelector, contactsOperations } from "../../redux/contacts";

// import { useDispatch } from "react-redux";

const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(contactsSelector.getFilteredContacts);
  const sortByName = (a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.contactList}>
      {filteredContacts.sort(sortByName).map((item) => {
        return (
          <li key={item.id} className={s.contact}>
            <span>{item.name}:</span>
            <span>{item.number}</span>
            <button
              className={s.btn}
              type="button"
              onClick={() =>
                dispatch(contactsOperations.deleteContact(item.id))
              }
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
