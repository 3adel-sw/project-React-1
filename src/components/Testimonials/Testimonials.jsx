import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import rArrow from "../../assets/rightArrow.png";
import lAarrow from "../../assets/leftArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  // Animation variants
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>

        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -200 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          className="opacity-50"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        ></motion.div>
        <motion.div
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        ></motion.div>
        <img src={testimonialsData[selected].image} alt="img" />
        <div className="arrows">
          <div className="a-left">
            <img
              onClick={() => {
                selected === 0
                  ? setSelected(tLength - 1)
                  : setSelected((prev) => prev - 1);
              }}
              src={lAarrow}
              alt=""
            />
          </div>
          <div className="a-right">
            <img
              onClick={() => {
                selected === tLength - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
              src={rArrow}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
