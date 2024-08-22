import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CartState from "./contexts/AddToCart/CartState";
import AuthState from "./contexts/Auth/AuthState";
import getCheckoutTheme from "./MUI/getCheckoutTheme.js";

//font roboto------
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import OrderPayment from "./contexts/Payment/OrderPayment.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

//for MUI SETUP
const mode = "light";
const theme = getCheckoutTheme(mode);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartState>
        <AuthState>
          <OrderPayment>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </OrderPayment>
        </AuthState>
      </CartState>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
