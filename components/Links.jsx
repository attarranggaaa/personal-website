import React from "react";
import { links } from "../constants";
import Link from "next/link";

const Links = () => {
  return (
    <div className="space-y-5">
      <h1 className="font-medium text-lg">Links</h1>
      <div className="space-y-5">
        <div className="grid grid-cols-4 text-sm gap-5 text-zinc-400">
          <div className="space-y-2">
            {links.map((link) => (
              <h1>{link.title}</h1>
            ))}
          </div>
          <div className="col-span-3 space-y-2 text-white">
            {links.map((link, i) => (
              <Link key={i} href={link.link}>
                <h1 className="hover:underline cursor-pointer after:content-['_↗']">
                  {link.text}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
