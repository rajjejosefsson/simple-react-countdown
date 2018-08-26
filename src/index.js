import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { App } from "./app";

import { TranslationProvider } from "./i18n/translationContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <TranslationProvider>
    <App />
  </TranslationProvider>,
  rootElement
);
