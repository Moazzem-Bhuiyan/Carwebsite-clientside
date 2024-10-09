import { FaShopify } from "react-icons/fa6";
import useCar from "../Hooks/useCar";
import Subscribe from "../shared/Subscribe/Subscribe";
import { Link } from "react-router-dom";

const Populer = () => {
  const { car } = useCar();

  const populeritem = car.filter((data) => data.category === "populer");

  return (
    <div className="w-[80%] m-auto my-20 space-y-20">
      <h1 className="text-center text-4xl font-bold   ">
        Choose Your Electric Car Of The Populer{" "}
      </h1>

      <div className="grid md:grid-cols-3 gap-10 p-5 shadow-2xl">
        {populeritem.map((item) => (
          <div className="bg-blue-950 p-8 rounded-badge  bg-opacity-50">
            <h1 className="text-2xl font-semibold">{item.carBrand}</h1>
            <p>{item.carName}</p>
            <div className="flex justify-center my-5">
              {" "}
              <img src={item.image} alt="" />
            </div>

            <div className="flex justify-between">
              {" "}
              <p>${item.price}</p>{" "}
              <Link to={`/viewDetails/${item.id}`}>
                <button className=" text-2xl">
                  {" "}
                  <FaShopify />{" "}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Subscribe></Subscribe>
    </div>
  );
};

export default Populer;
