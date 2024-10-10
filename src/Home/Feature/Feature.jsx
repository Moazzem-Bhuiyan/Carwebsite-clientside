import React, { useEffect } from "react";
import feature from "../../assets/Car/feature.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-10" data-aos="fade-up">
        More Features
      </h1>

      <div className="car">
        <div className="flex justify-center items-center h-[800px]">
          <button 
            className="text-white text-2xl font-bold md:-mr-20 z-50 bg-black p-4 rounded-md bg-opacity-30" 
            data-aos="zoom-in" // AOS animation for the button
          >
            800v <br /> Turbo <br /> Charging
          </button>
          <img className="w-[20%]" src={feature} alt="" data-aos="fade-in" /> {/* AOS animation for the image */}
          <button 
            className="text-white text-2xl font-bold md:-ml-20 bg-black p-4 rounded-md bg-opacity-30" 
            data-aos="zoom-in" // AOS animation for the second button
          >
            350 <br /> KM Range
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
