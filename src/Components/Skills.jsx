import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
const Skills = () => {
  const iconlist = [
    {
      id: "react",
      label: "React",
      icon: <FaReact className="text-4xl text-blue-400" />,
    },
    {
      id: "node",
      label: "NodeJs",
      icon: <FaNodeJs className="text-4xl text-green-400" />,
    },
    {
      id: "javascript",
      label: "Javascript",
      icon: <IoLogoJavascript className="text-4xl text-yellow-400" />,
    },
    {
      id: "html",
      label: "HTML",
      icon: <FaHtml5 className="text-4xl text-red-400" />,
    },
    {
      id: "css",
      label: "Css",
      icon: <SiCsswizardry className="text-4xl text-yellow-400" />,
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-16 py-20 bg-[#0a1e2a] text-white"
    >
      <h1 className="text-4xl font-bold mb-12">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {iconlist.map((item, i) => (
          <div
            key={i}
            className=" flex  bg-[#112b3c] rounded-xl shadow-md hover:scale-110 transition-all"
          >
            <div className="m-5">{item.icon}</div>
            <h2 className="text-xl font-semibold m-5 space-x-10">
              {item.label}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
