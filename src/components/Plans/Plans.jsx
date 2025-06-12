import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      {/* Background blur effect */}
      <div className="blur plans-blur-l"></div>
      <div className="blur plans-blur-r"></div>
      <div className="programs-header g-2">
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">Now withus</span>
      </div>
      {/* Plans Card  */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="whiteTick" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -> </span>
            </div>
            <button type="button" class="btn btn-success">
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
