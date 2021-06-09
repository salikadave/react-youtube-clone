import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import dotenv from "dotenv";
import CssBaseline from "@material-ui/core/CssBaseline";
import { QueueContextProvider } from "./store/queue-context";

dotenv.config({ path: "./.env" });

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c00",
    },
    secondary: {
      main: "#606060",
      light: "#f8f8f8",
    },
    error: {
      main: "#EA0B43",
    },
    text: {
      primary: "#000000",
      secondary: "#6f6f6f",
    },
    background: {
      default: "#FFFFFF",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueueContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueueContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
