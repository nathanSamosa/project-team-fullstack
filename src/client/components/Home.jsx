import { useState } from "react";
import "../styling/homePage.css";
import HomeMain from "./homeComponents/HomeMain";
import Header from "./homeComponents/Header";

const Home = () => {
  return (
    <div className="homePage">
      <Header />
      <HomeMain />
    </div>
  );
};

export default Home;
