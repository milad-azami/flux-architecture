import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContactContextProvider from "./context/contactContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactContextProvider>
      <App />
    </ContactContextProvider>
  </React.StrictMode>
);
