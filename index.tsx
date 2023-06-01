import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLInputElement
);

const client = new QueryClient();

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </Provider>
  // </React.StrictMode>
);
