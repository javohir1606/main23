import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./config/query-client.js";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false}/>
    <CssBaseline />
  </QueryClientProvider>
);
