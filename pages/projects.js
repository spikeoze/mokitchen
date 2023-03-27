import React from "react";
import Card from "../components/Card";
import { projects } from "../components/data";
function Projects() {
  return (
    <div className="mt-32 mb-20 max-w-7xl mx-auto">
      <p className="text-2xl text-center font-semibold underline underline-offset-4">
        Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28">
        {projects?.map((project) => {
          return (
            <Card
              key={project.id}
              img={project.img}
              title={project.title}
              description={project.description}
              tools={project.tools}
              site={project.site}
              source={project.source}
            />
          );
        })}
      </div>
    </div>
  );
}


export default Projects;
