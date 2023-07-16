import "./WorkCardStyles.css";
import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./JobsData";

const JobsMap = () => {
  return (
    <>
      <div className="work-container">
        <div className="project-container" style={{ marginTop: 120 }}>
          {WorkCardData.map((val, ind) => {
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
};

export default JobsMap;
