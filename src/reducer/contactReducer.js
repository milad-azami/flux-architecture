import { AddActionCreator, DeleteActionCreator } from "../action/contacts";

const contactReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case AddActionCreator().type:
      return {
        contacts: [...state.contacts, { ...action.payload, id: Math.random() }],
      };

    case DeleteActionCreator().type: {
      const newContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );

      return { contacts: newContacts };
    }

    default:
      throw new Error("Invalid type!");
  }
};

export default contactReducer;
