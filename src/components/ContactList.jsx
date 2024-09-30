import { DeleteActionCreator } from "../action/contacts";
import useContactContext from "../hook/useContactContext";

function ContactList() {
  const { state, dispatch } = useContactContext();

  const { contacts } = state || {};

  const deleteHandler = (id) => {
    dispatch(DeleteActionCreator(id));
  };

  if (!contacts?.length) return;

  return (
    <div>
      <p>ContactList</p>
      <ul>
        {contacts?.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => deleteHandler(contact.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
