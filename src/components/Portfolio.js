import React from "react";
import tripbuddy from "../assets/tripbuddy.jpg";
import password from "../assets/pwgen.png";
import notes from "../assets/notetaker.png";
import profgen from "../assets/ProfileGenerator.png"
import recipic from "../assets/recipic.png"
import dayplan from "../assets/dayplan.png"

function Portfolio() {
  return (
      <div>
    <div className="columns">
      {/* tripbuddy */}
      <div className="column">
        <a 
          href="https://trip-buddy-2020.herokuapp.com/"
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

    {/* Note Taker */}
    <div className="column">
        <a
          href="https://rocky-stream-46867.herokuapp.com/"
          target="blank"
        >
          <img src={notes} alt="Note Taker"></img>
        </a>
        <h1 className="has-text-centered">Note Taker</h1>
        <div className="has-text-centered">
          <a href="https://github.com/DwayneLaughlin/note_taker" target="blank">
            GitHub Repository
          </a>
        </div>
    </div>
</div>

<div className="columns">

{/* Profile Generator */}
<div className="column">
  <a 
    href="https://drive.google.com/file/d/1M92mnwpmKBEKtnELk8g49062Fli68UqV/view"
    target="blank"
  >
    <img src={profgen} alt="Proflie Generator"></img>
  </a>
  <h1 className="has-text-centered">Profile Generator</h1>
  <div className="has-text-centered">
    <a href="https://github.com/DwayneLaughlin/profile_generator" target="blank">
      GitHub Repository
    </a>
  </div>
</div>

{/* Recipal */}
<div className="column">
  <a
    href="https://shellbellquinn.github.io/ReciPal"
    target="blank"
  >
    <img src={recipic} alt="ReciPal"></img>
  </a>
  <h1 className="has-text-centered">ReciPal</h1>
  <div className="has-text-centered">
    <a href="https://github.com/shellbellquinn/ReciPal" target="blank">
      GitHub Repository
    </a>
  </div>
</div>

{/* Day Planner*/}
<div className="column">
  <a
    href="https://dwaynelaughlin.github.io/day_planner/"
    target="blank"
  >
    <img src={dayplan} alt="Day Planner"></img>
  </a>
  <h1 className="has-text-centered">Day Planner</h1>
  <div className="has-text-centered">
    <a href="https://github.com/DwayneLaughlin/day_planner" target="blank">
      GitHub Repository
    </a>
  </div>
</div>

</div>
</div>
  );
}

export default Portfolio;
