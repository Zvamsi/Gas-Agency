import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import PageNotFound from "./PageNotFound";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="grid grid-cols-4 gap-4 w-full">
          <Footer show={show} setShow={setShow} />
          <Main />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
