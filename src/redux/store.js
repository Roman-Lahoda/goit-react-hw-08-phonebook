import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
// import contactsReducer from "./contacts/contacts-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import contactsReducer from "./contacts/contacts-slice";
import authReducer from "./auth/auth-slice";

// const myMiddleware = (store) => (next) => (action) => {
//   console.log("my middleware");

//   next(action);
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactsPersistConfig = {
  key: "token",
  storage,
  // blacklist: ["filter"],
  whitelist: ["token"],
};

const persistedReducer = persistReducer(contactsPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
  },
  devtools: true,
  middleware,
  // devtools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
