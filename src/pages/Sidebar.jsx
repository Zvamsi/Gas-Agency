import Button from "./Button";
import { Link } from "react-router";
import ServiceList from "./ServiceList";
import Feedback from "./Feedback";
import { useData } from "../Context";
import StyledLink from "./StyledLink";

export default function Footer() {
  const { show, setShow, setIsService } = useData();

  return (
    <div className="col-span-1 bg-blue-500 py-4 px-1 flex flex-col ml-0">
      <StyledLink
        type="primary"
        to="/services"
        element={<ServiceList />}
        onClick={() => setIsService(false)}
      >
        Available services
      </StyledLink>
      <StyledLink type="secondary" to="feedback" element={<Feedback />}>
        Customer Reviews
      </StyledLink>
      {/* <Button onClick={() => setShow(!show)}>
        {show ? "Close services" : "Available services"}
      </Button> */}
    </div>
  );
}
