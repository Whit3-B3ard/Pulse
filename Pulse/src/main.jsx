import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from './context/UserContext.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App style={{padding:'0 !important'}} />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
