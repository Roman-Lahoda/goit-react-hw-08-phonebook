import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from "./contacts-operations";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    changeFilters: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.unshift(action.payload);
    },
    [addContact.rejected](state, action) {
      state.error = action.payload;
    },
    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
    },
    [changeContact.pending](state, action) {
      state.isLoading = true;
    },
    [changeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items = state.items.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return action.payload;
      });
    },
    [changeContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { changeFilters } = contactsSlice.actions;
export default contactsSlice.reducer;
