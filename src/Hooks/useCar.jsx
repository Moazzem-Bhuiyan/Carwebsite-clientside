import { useEffect, useState } from "react";

const useCar = () => {
  const [car, setCar] = useState([]);

  useEffect(() => {
    fetch("/car.json")
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  return { car };
};

export default useCar;
