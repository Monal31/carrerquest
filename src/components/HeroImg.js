import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>

      <div className="content">
        <h1>CareerQuest: Embark on Your Journey to Success</h1>
        <p>
          Unleash your potential and find your dream job with us. Join our
          vibrant community and take the next step in your career journey.
        </p>

        <div className="btnStyle">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/jobs" className="btn btn-light">
            Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg