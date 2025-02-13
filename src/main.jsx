import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Feedback from "./pages/Feedback.jsx";
import FeedBackForm from "./pages/FeedBackForm.jsx";
import { ContextProvider } from "./Context";

// import Auth from "./pages/Auth";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
    {/* <Auth /> */}
    {/* <Feedback /> */}
    {/* <FeedBackForm /> */}
  </StrictMode>
);
