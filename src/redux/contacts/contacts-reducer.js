// import { combineReducers } from "redux";
// import { createReducer, createSlice } from "@reduxjs/toolkit";
// import * as actions from "./contacts-actions";
// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
// } from "./contacts-operations";

// const itemsReducer = createReducer([], {
//   [fetchContacts.fulfilled]: (_, { payload }) => payload.reverse(),
//   [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
//   [deleteContact.fulfilled]: (state, action) => [
//     ...state.filter((item) => item.id !== action.payload),
//   ],
// });

// const filtersReducer = createReducer("", {
//   [actions.changeFilters]: (_, { payload }) => payload,
// });

// const itemsReducer = createSlice({
//   name: "items",
//   initialState: [],
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, action) =>
//       (state = action.payload.reverse()),
//     [addContact.fulfilled]: (state, action) => state.push(action.payload),
//     [deleteContact.fulfilled]: (state, action) =>
//       state.filter((item) => item.id !== action.payload),
//   },
// });

// const filtersReducer = createSlice({
//   name: "filter",
//   initialState: "",
//   extraReducers: {
//     [actions.changeFilters]: (_, { payload }) => payload,
//   },
// });

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filtersReducer,
// });

// export default contactsReducer;
