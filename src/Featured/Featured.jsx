import { Link, NavLink, Outlet } from "react-router-dom";
import Navber from "../shared/Navber/Navber";
import Footer from "../shared/Footer/Footer";
import Subscribe from "../shared/Subscribe/Subscribe";

const Featured = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="my-20">
        <h1 className="text-center text-3xl font-mono font-bold">
          Featured Luxury Cars
        </h1>

        <div className=" flex justify-center gap-10 my-10">
          <NavLink>
            {" "}
            <li>All</li>{" "}
          </NavLink>
          <NavLink to="/featured/tesla">
            {" "}
            <li>Tesla</li>{" "}
          </NavLink>
          <NavLink to="/featured/honda">
            {" "}
            <li>Honda</li>{" "}
          </NavLink>
          <NavLink to="/featured/porsche">
            {" "}
            <li>Porsche</li>{" "}
          </NavLink>
        </div>
      </div>

      <div>
        <Outlet></Outlet>
      </div>

      <Subscribe></Subscribe>

      <Footer></Footer>
    </div>
  );
};

export default Featured;
