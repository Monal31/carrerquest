import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import JobsMap from "../components/JobsMap";



const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        heading="JOBS"
        text="Unleash your potential and find your dream job with us."
      />
      <JobsMap/>
      <Footer />
    </div>
  );
};

export default About;
