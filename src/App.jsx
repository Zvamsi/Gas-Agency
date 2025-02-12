import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import PageNotFound from "./PageNotFound";
import { useState } from "react";
import Auth from "./pages/Auth";

function App() {
  const [show, setShow] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Auth
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                name={name}
                number={number}
                setName={setName}
                setNumber={setNumber}
              />
            }
          ></Route>
        </Routes>
        {isAuth && (
          <>
            <Header name={name} />
            <div className="grid grid-cols-4 gap-4 w-full">
              <Footer show={show} setShow={setShow} />
              <Main isAuth={isAuth} setIsAuth={setIsAuth} />
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
