import React from "react";
import Project from "./Project";
import projects from "../listOfProjects";

const Work = () => {
  return (
    <main className="work">
      <h2>Projects</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </main>
  );
};

export default Work;
