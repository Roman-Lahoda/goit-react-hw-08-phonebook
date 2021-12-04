import React from "react";
import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../../redux/contacts/contacts-actions";
import { contactsSelector } from "../../redux/contacts/";
import { changeFilters } from "../../redux/contacts/contacts-slice";

const Filter = () => {
  const filter = useSelector(contactsSelector.getFilter);
  // console.log(filter);
  const dispatch = useDispatch();
  // const hadleChange = (e) => {
  //   console.log(e.target.value);
  //   dispatch(changeFilters(e.target.value));
  // };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(changeFilters(e.target.value))}
        // onChange={hadleChange}
      ></input>
    </label>
  );
};

export default Filter;
