import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

export const getStatusLoading = (state) => state.loading;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    const sortByName = (a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;

    return contacts
      .filter((item) => item.name.toLowerCase().includes(normalizedFilter))
      .sort(sortByName);
  }
);
