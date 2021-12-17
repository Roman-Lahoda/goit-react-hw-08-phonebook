import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import notification from "../../utils/notification";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      notification.FetchError();
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      notification.AddContactSuccess();
      return data;
    } catch (error) {
      notification.AddContactError();
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      notification.DeleteContactSuccess();
      return id;
    } catch (error) {
      notification.DeleteContactError();
      return rejectWithValue(error);
    }
  }
);

export const changeContact = createAsyncThunk(
  "contact/change",
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const contact = { name, number };
      const { data } = await axios.patch(`/contacts/${id}`, contact);
      notification.ChangeContactSuccess();
      return data;
    } catch (error) {
      notification.ChangeContactError();
      return rejectWithValue(error);
    }
  }
);
