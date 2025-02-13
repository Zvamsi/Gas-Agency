import { createContext, useContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [show, setShow] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isService, setIsService] = useState(false);
  const [data, setData] = useState([]);
  const [feedBackName, setFeedBackName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <Context.Provider
      value={{
        show,
        isAuth,
        name,
        setIsAuth,
        setName,
        setNumber,
        number,
        setShow,
        isService,
        setIsService,
        data,
        setData,
        feedBackName,
        setFeedBackName,
        setReview,
        review,
        setRating,
        rating,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useData() {
  const context = useContext(Context);
  if (context === "undefined")
    throw new Error("Context is used outside the scope");
  return context;
}

export { ContextProvider, useData };
