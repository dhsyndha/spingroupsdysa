import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster
      position="bottom-right"
      gutter={3}
      toastOptions={{
        duration: 3000,
        style: {
          background: "#ffffff",
          color: "#0f172a",
          borderRadius: "16px",
          padding: "16px",
          border: "1px solid #e2e8f0",
          boxShadow:
            "0 15px 35px rgba(0,0,0,.12)",
          fontWeight: 600,
        },

        success: {
          iconTheme: {
            primary: "#22c55e",
            secondary: "#fff",
          },
          style: {
            borderLeft: "6px solid #22c55e",
          },
        },

        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
          style: {
            borderLeft: "6px solid #ef4444",
          },
        },
      }}
    />
  </StrictMode>
);