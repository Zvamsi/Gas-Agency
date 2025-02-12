import { Outlet, useLocation } from "react-router";
import Services from "./Services";
import { useEffect, useState } from "react";

export default function ServiceList() {
  const [isService, setIsService] = useState(false);

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
