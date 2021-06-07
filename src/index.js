import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Poppins"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#6153B7",
    },
    secondary: {
      main: "#39E1C1",
    },
    error: {
      main: "#EA0B43",
    },
    text: {
      primary: "#696969",
      secondary: "#8C8C8C",
    },
    background: {
      default: "#FDFDFD",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
