import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import "@fontsource/tenor-sans";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import setUpAxiosInterceptor from "./api/config/setUpAxiosInterceptor";
import { UserProvider } from "./components/common/userContext/UserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

setUpAxiosInterceptor();

reportWebVitals();
