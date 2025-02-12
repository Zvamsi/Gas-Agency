import Button from "./Button";
import { Link } from "react-router";
import ServiceList from "./ServiceList";
import Feedback from "./Feedback";

export default function Footer({ setShow, show }) {
  return (
    <div className="col-span-1 bg-blue-500 p-4 flex flex-col">
      <Link to="/services" element={<ServiceList />}>
        Available services
      </Link>
      <Link to="feedback" element={<Feedback />}>
        Customer Reviews
      </Link>
      {/* <Button onClick={() => setShow(!show)}>
        {show ? "Close services" : "Available services"}
      </Button> */}
    </div>
  );
}
