import React from "react";
import feature from "../../assets/Car/feature.png";

const Feature = () => {
  return (
    <div>
      <h1 className=" text-center text-4xl font-semibold mb-10">
        More Feature
      </h1>

      <div className="car">
        <div className="flex justify-center items-center h-[800px]">
          <button className=" text-white text-2xl font-bold md:-mr-20 z-50 bg-black p-4 rounded-md bg-opacity-30 ">
            800v <br /> Trubo <br /> Charging
          </button>
          <img className="w-[20%]" src={feature} alt="" />
          <button className=" text-white text-2xl font-bold md:-ml-20 bg-black p-4 rounded-md bg-opacity-30 ">
            350 <br /> KM Range
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Feature;
