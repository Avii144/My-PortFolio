import React from "react";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-16 py-20 bg-[#0a1e2a] text-white"
    >
      <h1 className="text-4xl font-bold mb-10">My Contact</h1>
      <div className="mt-[20%]text-3xl mb-20 flex flex-col  justify-center space-y-10">
        <p className="flex items-center text-[30px] space-x-4">
          <MdEmail />
          avinashlee2025@gmail.com
        </p>
        <p className="flex items-center text-[30px] space-x-4">
          <MdOutlinePhone />
          +91-8074910694
        </p>
      </div>
    </section>
  );
};

export default Contact;
