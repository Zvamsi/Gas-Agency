import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import PageNotFound from "./PageNotFound";
import { createContext, useContext, useState } from "react";
import Auth from "./pages/Auth";
import { useData } from "./Context";

//1.Create a new context
// export const Context = createContext();

function App() {
  const { isAuth } = useData();
  return (
    //2.Provide value to child component

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          {!isAuth && <Route path="*" element={<Auth />} />}
        </Routes>
        {isAuth && (
          <>
            <Header />
            <div className="grid grid-cols-4 gap-4 w-full">
              <Footer />
              <Main />
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
