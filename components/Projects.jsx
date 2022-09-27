import React from "react";
import Link from "next/link";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div className="space-y-5">
      <h1 className="font-medium text-lg text-primary">Projects</h1>
      <div className=" text-primary text-sm space-y-5">
        {projects.map((project, i) => (
          <Link key={i} href={project.link}>
            <div className="space-y-2 cursor-pointer group">
              <h1 className="text-primary after:content-['_↗'] group-hover:underline">
                {project.title}
              </h1>
              <h1>{project.stack}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
