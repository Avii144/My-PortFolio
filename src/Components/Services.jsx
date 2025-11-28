import React from "react";
import { FaCode, FaCameraRetro, FaLaptopCode } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
      title: "Web Development",
      desc: "Building responsive and modern web applications.",
    },
    {
      icon: <FaCode className="text-4xl text-green-400" />,
      title: "Freelancing",
      desc: "Professional freelance services for businesses & startups.",
    },
    {
      icon: <FaCameraRetro className="text-4xl text-pink-400" />,
      title: "Photography",
      desc: "High-quality photography and editing services.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen px-16 py-20 bg-[#0a1e2a] text-white"
    >
      <h1 className="text-4xl font-bold mb-12">My Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-6 bg-[#112b3c] rounded-xl shadow-md hover:scale-105 transition-all"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
