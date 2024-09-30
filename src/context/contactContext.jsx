import { createContext, useReducer } from "react";
import contactReducer from "../reducer/contactReducer";

export const cartContext = createContext();

const initialState = {
  contacts: [],
};

/* eslint-disable react/prop-types */
function ContactContextProvider({ children }) {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

export default ContactContextProvider;
