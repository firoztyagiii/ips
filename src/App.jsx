import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Principle from "./components/Principal/Principle";
import Vision from "./components/Vision/Vision";
import AtImperium from "./components/AtImperium/AtImperium";
import AboutUs from "./components/AboutUs/AboutUs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <Principle></Principle>
      <Vision></Vision>
      <AtImperium></AtImperium>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </main>
  );
};

export default App;
