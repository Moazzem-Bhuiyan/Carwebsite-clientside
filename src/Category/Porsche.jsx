import { FaShopify } from "react-icons/fa6";
import useCar from "../Hooks/useCar";
import { Link } from "react-router-dom";
import AOS from 'aos'; // Optional: AOS for animations
import 'aos/dist/aos.css'; // Optional: AOS CSS

const Porsche = () => {
  const { car } = useCar();
  const porscheitem = car.filter((data) => data.carBrand === "Porsche");

  return (
    <div className="w-[80%] m-auto my-20 space-y-20">
      <h1 className="text-center text-4xl font-bold my-10" data-aos="fade-up">
        Choose Your Electric Car Of The Porsche Car
      </h1>

      <div className="grid md:grid-cols-3 gap-10 p-5 shadow-2xl">
        {porscheitem.map((item) => (
          <div 
            key={item.id} // Ensure a unique key for each item
            className="bg-blue-950 p-8 rounded-badge bg-opacity-50 car-item" // Apply hover class here
            data-aos="fade-up" // Optional: AOS animation for each car item
          >
            <h1 className="text-2xl font-semibold">{item.carBrand}</h1>
            <p>{item.carName}</p>
            <div className="flex justify-center my-5">
              <img src={item.image} alt={item.carName} /> {/* Added alt attribute for accessibility */}
            </div>

            <div className="flex justify-between">
              <p>${item.price}</p>
              <Link to={`/viewDetails/${item.id}`}>
                <button className="text-2xl">
                  <FaShopify />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Porsche;
