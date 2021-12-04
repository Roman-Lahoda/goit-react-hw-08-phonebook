import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

export const getStatusLoading = (state) => state.loading;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    // const sortByName = (a, b) => a.name - b.name;
    // const sortedContacts = contacts.sort(sortByName);

    return contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// export const getFilteredContacts = (state) => {
//   const filter = getFilter(state);
//   const contacts = getContacts(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter((item) =>
//     item.name.toLowerCase().includes(normalizedFilter)
//   );
// };
