import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Skills = () => {
    return(
             <div className="top-[30vh] fixed">

      <Link href={"https://linkedin.com/shahid-islam-a2544922b"} target={"_blank"}>
      <div className="ml-[-86px] my-14 hover:ml-0 duration-200 flex justify-between text-lg items-center gap-1 fixed text-white bg-gray-900  w-32 py-3 px-3 rounded-r-lg">
          Linkedin
          <FaLinkedin size={24} />
        </div>
      </Link>
      <Link href={"https://twitter.com/drshahidislam"} target={"_blank"}>
      <div className=" ml-[-86px]  hover:ml-0 duration-200 flex justify-between text-lg items-center gap-1 fixed text-white bg-gray-900 w-32 py-3 px-3 rounded-r-lg">
          Twitter
          <FaTwitter size={24} />
        </div>
      </Link>
      <Link href={"https://github.com/DrShahidIslam"} target={"_blank"}>
      <div className=" ml-[-86px] my-28 flex justify-between hover:ml-0 duration-200  text-lg items-center gap-1 fixed text-white bg-gray-900  w-32 py-3 px-3 rounded-r-lg">
          Github
          <FaGithub size={24} />
        </div>
      </Link>


        </div>
    )
}

export default Skills;