import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelector, contactsOperations } from "../../redux/contacts";

import { Form, StyledButton } from "./AddContactsForm.styles";
import { TextField } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import AddIcon from "@mui/icons-material/Add";

const ContactsFrom = ({ handleFormClose, someProps }) => {
  console.log("someProps", someProps);
  const contacts = useSelector(contactsSelector.getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!number) {
      alert("enter the phone number");
      return;
    }

    const newContact = { name, number };
    const sameContact = contacts.find(
      (contact) => contact.name === newContact.name
    );
    if (sameContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(contactsOperations.addContact(newContact));
    handleFormClose();

    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="The name can only consist of letters, apostrophe, dash and spaces."
        required
        autoComplete="off"
      />
      <MuiPhoneNumber
        id="phone"
        name="number"
        label="Phone number"
        type="tel"
        InputLabelProps={{
          shrink: true,
        }}
        defaultCountry={"ua"}
        preferredCountries={["ua", "ru"]}
        variant="outlined"
        margin="normal"
        value={number}
        onChange={(e) => setNumber(e)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        autoComplete="off"
      />
      <StyledButton variant="outlined" endIcon={<AddIcon />} type="submit">
        Add contact
      </StyledButton>
    </Form>
  );
};

export default ContactsFrom;
