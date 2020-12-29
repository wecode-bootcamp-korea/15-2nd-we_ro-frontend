import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Routes from "./Routes";
import theme from "./styles/Theme";

const GlobalStyle = createGlobalStyle`//전역이다임마`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById("root"),
);
