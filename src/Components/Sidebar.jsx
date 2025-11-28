import React from "react";
import pic from "../Assets/profilepic.JPG";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { VscHome } from "react-icons/vsc";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";

const Sidebar = () => {
  const profilePic = import.meta.env.VITE_PROFILE_IMAGE;
  const fullName = import.meta.env.VITE_FULL_NAME;
  const scrollToSection = (id) => {
    const container = document.querySelector(".main-scroll");
    const section = document.getElementById(id);

    if (container && section) {
      container.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const icon_array = [
    { id: "git", icon: <FaGithub />, href: import.meta.env.VITE_SOCIAL_GITHUB },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      href: import.meta.env.VITE_SOCIAL_LINKEDIN,
    },
    {
      id: "twitter",
      icon: <FaXTwitter />,
      href: import.meta.env.VITE_SOCIAL_X,
    },
    {
      id: "insta",
      icon: <IoLogoInstagram />,
      href: import.meta.env.VITE_SOCIAL_INSTA,
    },
  ];
  const menuItems = [
    { id: "home", label: "Home", icon: <VscHome /> },
    { id: "about", label: "About", icon: <MdOutlinePersonOutline /> },
    { id: "resume", label: "Resume", icon: <MdOutlineDocumentScanner /> },
    { id: "contact", label: "Contact", icon: <GrContactInfo /> },
    { id: "skills", label: "Skills", icon: <GiSkills /> },
    { id: "services", label: "Services", icon: <MdDesignServices /> },
  ];
  return (
    <>
      <div
        className=" fixed w-[15%] bg-[#081b29] text-white h-screen p-5 flex flex-col items-center fixed z-5"
        alt="Sidebar"
      >
        <div className="justify-center" alt="profile sidebar">
          <img
            className="w-32 h-32 mx-10 rounded-full object-cover border-[6px] border-grey-800 shadow-md  "
            src={profilePic}
            alt="Profile picture"
          />

          <p className="flex justify-center text-[20px] font-sans subpixel-antialiased">
            {fullName}
          </p>
          <div className="flex justify-center gap-4 m-2">
            {icon_array.map((item, i) => (
              <a
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0d1721] text-white text-[20px] hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-md"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <nav className="flex flex-col justify-center mt-20 gap-5">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center text-[18px] gap-3 hover:text-sky-400 transition-all"
            >
              <span className="text-[22px]">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
