import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { contactsSelector, contactsOperations } from "../../redux/contacts";
import {
  ListItemText,
  ListItem,
  Divider,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledList, StyledIconButton } from "./ContactsList.style";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const ContactsList = ({
  setChangeContactModal,
  setChoosedContact,
  choosedContact,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [contactToDelete, setContactToDelete] = useState(null);

  const dispatch = useDispatch();

  const filteredContacts = useSelector(contactsSelector.getFilteredContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledList>
      {filteredContacts.map((item) => {
        return (
          <>
            <ListItem
              key={item.id}
              sx={{ padding: "5px" }}
              secondaryAction={
                <StyledIconButton
                  key={item.id}
                  edge="end"
                  onClick={(e) => {
                    handleClick(e);
                    setContactToDelete(item);
                    setChoosedContact(item);
                  }}
                >
                  <MoreVertIcon />
                </StyledIconButton>
              }
            >
              <ListItemText primary={item.name} key={item.name} />
              <ListItemText
                primary={item.number}
                sx={{ textAlign: "end", paddingRight: "20px" }}
                key={item.number}
              />
            </ListItem>
            <Divider />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  href={`tel:${choosedContact?.number}`}
                  underline="none"
                  color="#489355"
                >
                  <CallIcon />
                  Call
                </Link>
                <Divider />
              </MenuItem>
              <MenuItem
                sx={{ color: "#CACA53" }}
                onClick={() => {
                  handleClose();
                  setChangeContactModal(true);
                }}
              >
                <CreateIcon />
                Change
              </MenuItem>
              <MenuItem
                sx={{ color: "#CA5353" }}
                onClick={() => {
                  handleClose();
                  console.log("id of deleting contact", item.id);
                  dispatch(
                    contactsOperations.deleteContact(contactToDelete.id)
                  );
                }}
              >
                <DeleteIcon />
                Delete
              </MenuItem>
            </Menu>
          </>
        );
      })}
    </StyledList>
  );
};

export default ContactsList;
