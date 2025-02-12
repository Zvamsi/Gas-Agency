import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";

export default function Services({ title, details, service, setIsService }) {
  const location = useLocation();

  useEffect(
    function () {
      setIsService((prev) => (prev ? false : prev));
    },
    [location]
  );
  return (
    <div className="flex flex-col ">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{details}</p>
      <NavLink onClick={() => setIsService(true)} to={service}>
        See More...
      </NavLink>
    </div>
  );
}
