import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reduxStore from "redux/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "theme";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
