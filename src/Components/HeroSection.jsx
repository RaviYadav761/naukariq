import React, { useState } from "react";
import Cards from "./Cards";
import aitools from "../assets/images/aitools.png";
import codingimg from "../assets/images/Coding.png";
import apps from "../assets/images/apps.png";

import monkey from "../assets/images/monkey.png"
// import Movies from "../Pages/Coding";
import Input from "../Components/Input";
// import codingicon from "../../assets/images/codingicon.png"


const cardData = [
  {
    srcimg: codingimg,
    name: "CODING",
      path: "/CodingArtical",
    detailsProd:
      "All coding se related sabhi information ,artical available here . ",
  },
  // {
  //   srcimg: apps,
  //   name: "APPS",
  //   path: "/apps",
  //   detailsProd:
  //     "All AI Tools in one place. Learn how to use them easily with step-by-step guides and images.",
  // }, 
  
  {
    srcimg: aitools,
    name: "AI TOOLS",
    path: "/aitools",
    detailsProd:
      "All AI Tools in one place. Learn how to use them easily with step-by-step guides and images.",
  },
];

const HeroSection = () => {


  return (
    <section className="bg-black/30 w-full min-h-screen pt-8">

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-9 px-7">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            srcimg={card.srcimg}
            name={card.name}
            detailsProd={card.detailsProd}
            path={card.path}
            imageClassName="w-[240px] h-28 sm:w-[280px] sm:h-32"
          />
        ))}
      </div>
 

    </section>
  );
};

export default HeroSection;