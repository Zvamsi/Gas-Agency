import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Feedback from "./pages/Feedback.jsx";
import FeedBackForm from "./pages/FeedBackForm.jsx";
// import Auth from "./pages/Auth";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Auth /> */}
    {/* <Feedback /> */}
    {/* <FeedBackForm /> */}
  </StrictMode>
);
