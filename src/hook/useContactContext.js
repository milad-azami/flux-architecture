import { useContext } from "react";
import { cartContext } from "../context/contactContext";

const useContactContext = () => {
  return useContext(cartContext);
};

export default useContactContext;
