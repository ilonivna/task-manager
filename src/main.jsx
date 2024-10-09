import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import './index.css';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import 'modern-normalize';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <HelmetProvider>
        <App />
        </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);