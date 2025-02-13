import { useData } from "../Context";
import Button from "./Button";
import { Link } from "react-router";
import StyledLink from "./StyledLink";

export default function Header() {
  const { name } = useData();
  return (
    <div className="bg-gray-500 place-content-between p-5 flex">
      <div className="flex">
        <h1 className="text-3xl font-bold text-blue-300 underline decoration-double">
          Hello {name}😎
        </h1>
        <StyledLink to="/home">Home</StyledLink>
        {/* <Link className="text-blue-700 mt-2 ml-4" to="/home">
          Home
        </Link> */}
      </div>
      <div className="flex space-x-5">
        <div className="flex h-10 w-34 overflow-hidden border space-x-1">
          <a href="https://www.facebook.com">
            <img
              className="w-full h-full object-contain"
              src="/facebook.png"
              alt=""
            />
          </a>
          <hr />
          <a href="https://www.instagram.com">
            <img
              src="instagram.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </a>
          <a href="https://www.youtube.com">
            <img
              src="youtube.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </a>
          <a href="https://www.x.com">
            <img
              className="w-full h-full object-contain"
              src="twitter.png"
              alt=""
            />
          </a>
        </div>
        <StyledLink to="/contact">Contact Us</StyledLink>
      </div>
    </div>
  );
}
