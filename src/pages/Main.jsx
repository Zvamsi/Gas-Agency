import PageNotFound from "../PageNotFound";
import Contact from "./Contact";
import Home from "./Home";
import { Route, Routes } from "react-router";
import ServiceList from "./ServiceList";

export default function Main() {
  return (
    <div className="col-span-3 bg-gray-200 p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServiceList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
