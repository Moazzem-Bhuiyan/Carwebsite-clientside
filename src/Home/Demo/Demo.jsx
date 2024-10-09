import { FaBatteryThreeQuarters, FaTemperatureArrowUp } from "react-icons/fa6";
import home from "../../assets/Car/home.png";

const Demo = () => {
  return (
    <div className="my-20 space-y-10">
      <h1 className="text-center text-4xl font-bold">Choose The Best Car</h1>
      <p className="text-center text-2xl font-bold">Porsche Mission E</p>

      <div className="flex justify-center py-10">
        <img src={home} alt="" />
      </div>
      <div className=" grid grid-cols-3 w-[70%] m-auto">
        <div className="grid justify-center space-y-2">
          <div className="flex justify-center">
            <FaTemperatureArrowUp className="text-2xl text-center"></FaTemperatureArrowUp>
          </div>
          <h1 className="text-3xl text-center font-bold">24°</h1>
          <p className=" uppercase">Temperature</p>
        </div>
        <div className="grid justify-center space-y-2">
          <div className="flex justify-center">km</div>
          <h1 className="text-3xl text-center font-bold">873</h1>
          <p className=" uppercase">milege</p>
        </div>
        <div className="grid justify-center space-y-2">
          <div className="flex justify-center">
            <FaBatteryThreeQuarters className="text-2xl"></FaBatteryThreeQuarters>
          </div>
          <h1 className="text-3xl text-center font-bold">94%</h1>
          <p className=" uppercase">battery</p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
