import PageNotFound from "../PageNotFound";
import Contact from "./Contact";
import Home from "./Home";
import { Route, Routes } from "react-router";
import ServiceList from "./ServiceList";
import Auth from "./Auth";
import Service01 from "./Service01";
import Service03 from "./Service03";
import Service02 from "./Service02";
import Feedback from "./Feedback";

export default function Main({ setIsAuth, isAuth }) {
  return (
    <div className="col-span-3 bg-gray-200 p-4">
      <Routes>
        <Route idex element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/"
          element={<Auth setIsAuth={setIsAuth} isAuth={isAuth} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="services" element={<ServiceList />}>
          <Route path="service01" element={<Service01 />} />
          <Route path="service02" element={<Service02 />} />
          <Route path="service03" element={<Service03 />} />
        </Route>
        <Route path="feedback" element={<Feedback />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
