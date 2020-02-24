import React from "react";
import tripbuddy from "../assets/tripbuddy.jpg";
import password from "../assets/pwgen.png"

function Portfolio() {
  return (
    <div className="columns">
      {/* tripbuddy */}
      <div className="column">
        <a 
          href="https://mysterious-eyrie-04638.herokuapp.com/dashboard"
          target="blank"
        >
          <img src={tripbuddy} alt="TripBuddy"></img>
        </a>
        <h1 className="has-text-centered">TripBuddy</h1>
        <div className="has-text-centered">
          <a href="https://github.com/evwhite2/Group2Project" target="blank">
            GitHub Repository
          </a>
        </div>
      </div>

      {/* PW GENERATOR */}
      <div className="column">
        <a
          href="https://dwaynelaughlin.github.io/pw_generator/"
          target="blank"
        >
          <img src={password} alt="Password Generator"></img>
        </a>
        <h1 className="has-text-centered">Password Generator</h1>
        <div className="has-text-centered">
          <a href="https://github.com/DwayneLaughlin/pw_generator" target="blank">
            GitHub Repository
          </a>
        </div>
    </div>
    </div>
  );
}

export default Portfolio;
