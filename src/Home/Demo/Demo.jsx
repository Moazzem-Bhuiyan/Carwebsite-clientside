import { FaBatteryThreeQuarters, FaTemperatureArrowUp } from "react-icons/fa6";
import home from "../../assets/Car/home.png";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Demo = () => {
  return (
    <div className="my-20 space-y-10">
      {/* Title Section */}
      <motion.h1 
        className="text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }} // Initial animation
        animate={{ opacity: 1, y: 0 }} // Final animation state
        transition={{ duration: 1 }}    // Duration of the animation
      >
        Choose The Best Car
      </motion.h1>

      <motion.p 
        className="text-center text-2xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }} // Slight delay for smooth effect
      >
        Porsche Mission E
      </motion.p>

      {/* Car Image Section */}
      <motion.div 
        className="flex justify-center py-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <img src={home} alt="Car" />
      </motion.div>

      {/* Car Features Section */}
      <motion.div 
        className="grid grid-cols-3 w-[70%] m-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      >
        {/* Temperature */}
        <div className="grid justify-center space-y-2">
          <div className="flex justify-center">
            <FaTemperatureArrowUp className="text-2xl text-center"></FaTemperatureArrowUp>
          </div>
          <h1 className="text-3xl text-center font-bold">
            <CountUp start={0} end={24} duration={3} suffix="°" />
          </h1>
          <p className="uppercase">Temperature</p>
        </div>

        {/* Mileage */}
        <div className="grid justify-center space-y-2">
          <div className="flex justify-center">km</div>
          <h1 className="text-3xl text-center font-bold">
            <CountUp start={0} end={873} duration={3} />
          </h1>
          <p className="uppercase">Mileage</p>
        </div>

        {/* Battery */}
        <div className="grid justify-center space-y-2">
          <div className="flex justify-center">
            <FaBatteryThreeQuarters className="text-2xl"></FaBatteryThreeQuarters>
          </div>
          <h1 className="text-3xl text-center font-bold">
            <CountUp start={0} end={94} duration={3} suffix="%" />
          </h1>
          <p className="uppercase">Battery</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Demo;
