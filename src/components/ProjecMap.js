import "./WorkCardStyles.css";
import React from 'react'
import WorkCard from "./WorkCard";
import WorkCardData1 from "./ProjectData";




const ProjectMap = () => {
  return (
    <>
      <div className="work-container">
        <div className="project-container" style={{ marginTop: 120 }}>
          {WorkCardData1.map((val, ind) => {
            return (
              <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectMap;