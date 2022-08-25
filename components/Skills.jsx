import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <div className="space-y-2">
      <h1 className="font-medium text-lg">Skills</h1>
      <div className="flex flex-wrap">
        {skills.map((skill, i) => (
          <div key={i} className="border border-zinc-400 rounded-lg px-3 py-1 text-sm mr-2 mb-2 text-zinc-400">
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
