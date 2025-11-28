import React from "react";

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen px-16 py-20 bg-[#081b29] text-white"
    >
      <h1 className="text-4xl font-bold mb-10">Resume</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold underline">
            Professional Summary
          </h2>
          <p className="text-xl mt-10">
            Software Engineer with 3+ years of experience in building scalable,
            secure, and accessible web applications using Python,React.js,
            JavaScript (ES6+). Proficient in designing and developing end-to-end
            solutions that integrate seamlessly with RESTful APIs. Demonstrated
            ability to collaborate in agile teams, maintain production-ready
            code, and contribute to architectural design. Committed to improving
            system performance and code quality through proactive debugging and
            best practices
          </p>
          {/* <ul className="list-disc ml-6 mt-2 text-gray-300">
            <li>Frontend Developer at Company XYZ (2021–Present)</li>
            <li>Freelance Developer (2019–2021)</li>
          </ul> */}
        </div>
        <div>
          <h2 className="text-2xl font-semibold underline mb-4">
            Professional Experience
          </h2>
          <div className="flex flex-col">
            <span className="text-xl space-x-6n">
              <b>Role</b>: Frontend Engineer – Tata Consultancy Services (TCS){" "}
            </span>
            <span className="text-xl  ">
              <b>Client</b>: Proximus (Telecommunications) | Hyderabad, India
              Feb 2022 – June 2025{" "}
            </span>
            <ul className="list-disc ml-6 mt-2 text-gray-300 text-xl">
              <li>
                Delivered scalable and secure Single Page Applications (SPAs)
                using React.js,Python,JavaScript{" "}
              </li>
              <li>
                Collaborated with full-stack teams to design REST APIs,
                contributing to system architecture and reusable UI components.{" "}
              </li>
              <li>
                Improved bundle performance with Webpack and Rollup
                optimizations.
              </li>
              <li>
                Wrote unit tests and debugged cross-browser issues to ensure
                production stability.
              </li>
              <li>
                Participated in code reviews and pair programming to enforce
                clean coding standards.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold underline">Education</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-300 text-xl">
            <li>
              Received Graduation from Rajiv Gandhi University of Knowledge And
              Technologies(IIIT) in 2021
            </li>
            <li>CGPA:8.77</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
``;
