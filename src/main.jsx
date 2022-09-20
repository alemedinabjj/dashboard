import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./styles/ThemeProvider";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
