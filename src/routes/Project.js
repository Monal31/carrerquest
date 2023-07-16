import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";

import ProjectMap from "../components/ProjecMap";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="Find your work" />

      <ProjectMap />
      <Footer />
    </div>
  );
};

export default Project;
