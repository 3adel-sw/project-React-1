import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      {/* Background blur effect */}
      <div className="blur hero-blur"></div>

      {/* Left side */}
      <div className="hero-left">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "168px" : "210px" }}
            whileInView={{ left: "0px" }}
            // transition={{ ...transition, type: "tween" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        {/* Hero Headings */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className="span">
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+ 979</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span> fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="hero-right">
        <button className="btn">
          <a href="">Join Now</a>
        </button>
        <motion.div
          className="heart-rate"
          initial={{ right: "-4rem" }}
          whileInView={{ right: "4.8rem" }}
          transition={{ ...transition, duration: 1 }}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          src={hero_image_back}
          alt=""
          className="hero-image-back"
          initial={{ left: "-38rem" }}
          whileInView={{ left: "-7rem" }}
          transition={{ ...transition, duration: 1 }}
        />
        {/* hero Calorises */}
        <motion.div
          className="calories"
          initial={{ left: "-38rem" }}
          whileInView={{ left: "-4rem" }}
          transition={{ ...transition, duration: 1 }}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
          <div></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
