import { Outlet, useLocation, useNavigate } from "react-router";
import Services from "./Services";
import { useEffect, useState } from "react";
import { useData } from "../Context";

export default function ServiceList() {
  // const [isService, setIsService] = useState(false);
  const { isService, setIsService } = useData();
  const navigate = useNavigate();

  return (
    <>
      {/* {Outlet} */}
      {!isService ? (
        <>
          <Services
            title="New Connection"
            details="We offer new connection for homes and commercial."
            service="service01"
            setIsService={setIsService}
          ></Services>
          <Services
            title="Existing Issues"
            details="We provide the support to existing cylinder problems"
            service="service02"
            setIsService={setIsService}
          />
          <Services
            title="Online booking"
            details="Doorstep Delivery"
            service="service03"
            setIsService={setIsService}
          />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}
