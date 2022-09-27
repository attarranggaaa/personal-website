import React from "react";
import { internship } from "../constants";

const Internship = () => {
  return (
    <div className="space-y-5">
      <h1 className="font-medium text-lg text-primary">Experience</h1>
      <div className="space-y-5">
        {internship.map((intern, i) => (
          <div key={i} className="grid grid-cols-4 text-sm gap-5 text-primary">
            <div>
              <h1>{intern.long}</h1>
            </div>
            <div className="col-span-3 space-y-2">
              <h1 className="text-primary">{intern.position}</h1>
              <h1>{intern.place}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
