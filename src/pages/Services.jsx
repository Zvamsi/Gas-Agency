import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

export default function Services({ title, details, service, setIsService }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(
    function () {
      setIsService((prev) => (prev ? false : prev));
    },
    [navigate, location]
  );
  return (
    <div className="flex flex-col ">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{details}</p>
      <NavLink
        className="bg-amber-100 w-fit text-sm border-none rounded-4xl px-2 py-1 hover:shadow-lg hover:text-blue-300"
        onClick={() => setIsService(true)}
        to={service}
      >
        See More...
      </NavLink>
    </div>
  );
}
