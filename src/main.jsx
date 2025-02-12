import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Feedback from "./pages/Feedback.jsx";
// import Auth from "./pages/Auth";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Auth /> */}
    {/* <Feedback /> */}
  </StrictMode>
);
