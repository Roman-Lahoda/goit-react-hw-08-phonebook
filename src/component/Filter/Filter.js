import React from "react";
// import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../../redux/contacts/contacts-actions";
import { contactsSelector } from "../../redux/contacts/";
import { changeFilters } from "../../redux/contacts/contacts-slice";
import { IconButton } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { StyledOutlinedInput } from "./Filter.style";

const Filter = () => {
  const filter = useSelector(contactsSelector.getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <StyledOutlinedInput
        placeholder="Find contact by name"
        id="filter"
        name="filter"
        type="text"
        variant="outlined"
        margin="normal"
        value={filter}
        onChange={(e) => dispatch(changeFilters(e.target.value))}
        autoComplete="off"
        endAdornment={
          <InputAdornment position="end" disabled>
            <IconButton disabled edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
};

export default Filter;
