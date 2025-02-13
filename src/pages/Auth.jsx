import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router";
// import { Context } from "../App";
import { useData } from "../Context";

const inputStyle =
  "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600";

export default function Auth() {
  //   const [name, setName] = useState("");
  //   const [number, setNumber] = useState("");
  //   const [isAuth, setIsAuth] = useState(false);
  const { isAuth, setIsAuth, name, number, setName, setNumber } = useData();
  console.log(isAuth);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (name && number) setIsAuth(!isAuth);
    if (!name || !number) throw new Error("Please enter correct details");
  }

  useEffect(
    function () {
      if (isAuth) navigate("/home");
    },
    [isAuth]
  );

  return (
    <div className="h-screen grid place-items-center bg-gray-500 space-y-2">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-400 rounded-lg p-4 space-y-2 w-[500px]"
      >
        <div>
          <p>Enter Name:</p>
          <input
            className={inputStyle}
            type="text"
            id="name"
            default="user"
            placeholder="Enter full name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <p>Enter your mobile number</p>
          <input
            className={inputStyle}
            type="number"
            id="mobileNumber"
            default="9935664883"
            maxLength={10}
            placeholder="Enter 10 Digit mobile number"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
}
