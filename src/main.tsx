import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import "./index.css";
import { persistor, store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}></PersistGate>
      <App />
    </Provider>
  </StrictMode>
);
