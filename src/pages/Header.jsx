import Button from "./Button";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="bg-gray-500 place-content-between p-5 flex">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
}
