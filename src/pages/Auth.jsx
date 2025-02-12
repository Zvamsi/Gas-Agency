import { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router";

export default function Auth({
  isAuth,
  setIsAuth,
  name,
  number,
  setName,
  setNumber,
}) {
  //   const [name, setName] = useState("");
  //   const [number, setNumber] = useState("");
  //   const [isAuth, setIsAuth] = useState(false);

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
        className="bg-gray-400 rounded-lg p-4 space-y-2"
      >
        <div>
          <p>Enter Name:</p>
          <input
            className="border-none"
            type="name"
            id="name"
            default="user"
            placeholder="Enter full name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <p>Enter your mobile number</p>
          <input
            type="mobileNumber"
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
        {console.log(name, number)}
      </form>
    </div>
  );
}
