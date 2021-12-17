import { useState } from "react";
import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/contacts";

import { Form, StyledButton } from "./ChangeContactForm.style";
import { TextField } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import SaveIcon from "@mui/icons-material/Save";

const ChangeContactsForm = ({ choosedContact, handleFormClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(choosedContact.name);
  const [number, setNumber] = useState(choosedContact.number);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number === "+") {
      alert("enter the phone number");
      return;
    }
    const newContact = { id: choosedContact.id, name, number };
    console.log(newContact);
    dispatch(contactsOperations.changeContact(newContact));
    handleFormClose();
    setName("");
    setNumber("");
  };

  return (
    <>
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
        <StyledButton variant="outlined" endIcon={<SaveIcon />} type="submit">
          Save
        </StyledButton>
      </Form>
    </>
  );
};

export default ChangeContactsForm;
