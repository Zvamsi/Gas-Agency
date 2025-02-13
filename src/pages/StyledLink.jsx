import { Link } from "react-router";

export default function StyledLink({ to, children, color = "green", onClick }) {
  // let className = "";
  // if (type === "secondary")
  //   className =
  //     "px-4 py-2 text-green-700 font-medium rounded-md transition hover:text-green-900 hover:bg-green-200 active:bg-orange-300";
  // if (type === "primary")
  //   className =
  //     "px-6 py-2 bg-gray-600 text-white font-medium rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg active:bg-gray-800 active:shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 transition";
  return (
    <Link
      className={`px-4 py-2 bg-${color}-600 text-white font-medium rounded-lg shadow-md hover:bg-${color}-700 hover:shadow-lg active:bg-${color}-800 active:shadow-inner focus:outline-none focus:ring-2 focus:ring-${color}-400 transition whitespace-nowrap text-ellipsis w-fit`}
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
