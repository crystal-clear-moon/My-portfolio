import React from "react";
import me from "../assets/me.jpg";
import resume from "../assets/Resume2019.pdf"

function Home() {
  return (
    <div>
      <p class="col-md-8">
        Hi! I'm Dwayne Laughlin. I'm a lifelong Chicagoan currently living in
        the neighborhood whre I grew up on the Westside. I attended Loyola
        University Chicago, graduating in summer of 2011 with a BA in Music.
        Since graduation I have spent time working as a music teacher,
        performing pianist, composer and producer. For the last 2 years I have
        also been the current lead for the account management/collections team
        for zZounds.com, a leading company in the instrument retail business.
        Part of my day to day job is overlooking some of the coding of our
        internal wiki page and doing some light coding in HTML.
        <br />
        <br />
        I am currently enrolled in the Coding Bootcamp at Northwestern
        University with a scheduled completion date of March 2020. I hope to
        gain a deeper understanding of the concepts related to coding both the
        front end and the backend of a website. <br />
        <br />
      </p>

      
      <div className="has-text-centered">
        <img src={me} alt="Dwayne"></img>
        <br></br>
        <a href="https://github.com/DwayneLaughlin" target="blank">
          Github
        </a>
        <br />
        <a
          href={resume}
          target="blank"
        >
          Resume
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/dwayne-laughlin-74982118b/"
          target="blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Home;
