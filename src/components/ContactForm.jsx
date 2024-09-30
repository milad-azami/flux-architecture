import { useState } from "react";
import useContactContext from "../hook/useContactContext";
import { AddActionCreator } from "../action/contacts";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const { dispatch } = useContactContext();

  const addHandler = () => {
    if (!name || !number) return alert("Please enter data!");

    dispatch(AddActionCreator({ name, number }));
  };

  return (
    <div>
      <p>ContactForm</p>
      <input
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={number}
        placeholder="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={addHandler}>Add</button>
    </div>
  );
}

export default ContactForm;
