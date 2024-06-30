import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from './state'

if (window.self === window.top) {
  ReactDOM.render(
    <React.StrictMode>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
        <Provider store={store}>
          <App />
        </Provider>
      </GoogleReCaptchaProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <div>Not Allowed.</div>,
    document.getElementById("root"))
}

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
