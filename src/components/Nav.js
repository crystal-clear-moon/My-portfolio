import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="buttons is-centered">
        <button className=" button is-success">
          <Link to="/">Home</Link>
        </button>

        <button className="button is-success">
          <Link to="/contact">Contact</Link>
        </button>

        <button className="button is-success">
          <Link to="/portfolio">Portfolio</Link>
        </button>
      </div>
      <br />
    </div>
  );
}

export default Nav;
