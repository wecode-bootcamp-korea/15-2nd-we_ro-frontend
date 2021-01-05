import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";

ReactDOM.render(
  <>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById("root"),
);
