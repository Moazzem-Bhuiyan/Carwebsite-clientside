import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Demo from "../Demo/Demo";
import Porsche from "../DisplayPorsche/Porsche";
import Feature from "../Feature/Feature";
import Subscribe from "../../shared/Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Demo></Demo>

      <About></About>
      <Hero></Hero>

      <Porsche></Porsche>

      <Feature></Feature>

      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
