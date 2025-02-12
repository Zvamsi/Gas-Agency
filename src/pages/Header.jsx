import Button from "./Button";
import { Link } from "react-router";

export default function Header({ name }) {
  return (
    <div className="bg-gray-500 place-content-between p-5 flex">
      <div className="flex">
        <h1 className="text-3xl font-bold text-blue-300 underline decoration-double">
          Hello {name}😎
        </h1>
        <Link className="text-blue-700 mt-2 ml-4" to="/home">
          Home
        </Link>
      </div>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
}
