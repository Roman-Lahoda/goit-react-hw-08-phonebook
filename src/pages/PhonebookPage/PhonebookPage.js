import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import AddContactsForm from "../../component/AddContactsForm";
import ChangeContactForm from "../../component/ChangeContactForm";
import ModalWindow from "../../component/ModalWindow/ModalWindow";
import Filter from "../../component/Filter";
import ContactsList from "../../component/ContactsList";
import {
  getContacts,
  getStatusLoading,
  getFilteredContacts,
} from "../../redux/contacts/contacts-selectors";
import {
  Container,
  StyledButton,
  StyledTypography,
} from "./PhonebookPage.style";
import { contactsOperations } from "../../redux/contacts";
import { Zoom, Box, Fab, useScrollTrigger } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

const PhonebookPage = () => {
  const [addContactModal, setAddContactModal] = useState(false);
  const [changeContactModal, setChangeContactModal] = useState(false);
  const [choosedContact, setChoosedContact] = useState(null);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const statusLoading = useSelector(getStatusLoading);
  const filteredContacts = useSelector(getFilteredContacts);

  const handleFormOpen = () => setAddContactModal(true);
  const handleFormClose = () => {
    setAddContactModal(false);
    setChangeContactModal(false);
  };

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <StyledButton
        variant="outlined"
        endIcon={<AddIcon />}
        onClick={handleFormOpen}
        id="back-to-top-anchor"
      >
        Add new contact
      </StyledButton>
      {statusLoading && <p>Loading phonebook...</p>}
      {contacts.length > 1 && <Filter />}
      {filteredContacts.length > 0 ? (
        <ContactsList
          setChangeContactModal={setChangeContactModal}
          setChoosedContact={setChoosedContact}
          choosedContact={choosedContact}
        />
      ) : (
        <StyledTypography>No one contacts found</StyledTypography>
      )}

      <ModalWindow modalOpen={addContactModal} modalClose={handleFormClose}>
        <AddContactsForm handleFormClose={handleFormClose} />
      </ModalWindow>
      <ModalWindow modalOpen={changeContactModal} modalClose={handleFormClose}>
        <ChangeContactForm
          handleFormClose={handleFormClose}
          choosedContact={choosedContact}
        />
      </ModalWindow>
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
};

export default PhonebookPage;
