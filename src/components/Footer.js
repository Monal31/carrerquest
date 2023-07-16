import "./FooterStyles.css"
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaGithub} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>CareerQuest: Embark on Your Journey to Success</p>
              <p>SNS college of technology</p>
              <p>Coimbatore</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 93603235454
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              careerQuest@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About us</h4>
          <p>
            Discover a community-driven platform that connects talent with
            top-notch employers, helping you find your perfect fit and unlock
            your professional potential.{" "}
          </p>
          <div className="social">
            <a
              target="__blank"
              href="https://www.facebook.com/"
            >
              <FaFacebook size={30} className="fb-icon" />
            </a>
            <a target="__blank" href="https://github.com/">
              <FaGithub size={30} className="Tw-icon" />
            </a>
            <a
              target="__blank"
              href="https://www.linkedin.com/"
            >
              <FaLinkedin size={30} className="Lin-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer