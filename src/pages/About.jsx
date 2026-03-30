import React from "react";

const About = () => {
  const tools = [
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/javascript--v1.png",
    },
    { name: "React", icon: "https://img.icons8.com/officel/40/react.png" },
    {
      name: "Tailwind",
      icon: "https://img.icons8.com/color/48/tailwind_css.png",
    },
    { name: "HTML5", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
    { name: "CSS3", icon: "https://img.icons8.com/color/48/css3.png" },
    { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
    { name: "Node.js", icon: "https://img.icons8.com/fluency/48/node-js.png" },
    { name: "Vite", icon: "https://img.icons8.com/color/48/vite.png" },
    {
      name: "VS Code",
      icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png",
    },
  ];

  return (
    /* ADDED id="about" HERE */
    <section
      id="about"
      className="min-h-screen bg-white pt-16 pb-16 pl-2 pr-4 md:pl-4 md:pr-6 lg:pl-8 lg:pr-8 font-sans overflow-x-hidden"
    >
      {/* HEADER with Rainbow Text */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-red-500 via-blue-500 via-blue-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-3"></div>
        <p className="text-slate-400 text-sm">
          Learn more about my skills, experience, and passion for web
          development
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-[1.4fr_0.6fr] gap-10 items-start">
        {/* LEFT TEXT (Preserving your exact 15-line text) */}
        <div className="w-full">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Front End Developer with{" "}
            <span className="text-slate-300">1 Year of Experience</span>
          </h3>

          <div className="text-slate-600 leading-[1.7] text-[18px] text-left">
            <p className="mb-4">
              I’m a frontend developer with about a year of hands-on experience
              building responsive and user-focused web applications. I’ve
              developed a strong foundation through continuous practice and
              real-world projects, focusing on creating clean and interactive
              user interfaces.
            </p>

            <p className="mb-4">
              I work with modern tools including React, React Native, JavaScript
              (ES6+), and Tailwind CSS, with a strong emphasis on
              component-based architecture and maintainable code.
            </p>

            <p className="mb-4">
              I’ve strengthened my skills through structured training, including
              a frontend development program{" "}
              <span className="font-bold text-slate-900">
                Betechified (October 2025)
              </span>{" "}
              with graded assignments and a capstone project. Currently, I’m
              further developing my expertise at{" "}
              <span className="font-bold text-slate-900">
                TS Academy (January 2026)
              </span>
              , where I joined as an intermediate learner and am continuing to
              advance my practical knowledge and development workflow.
            </p>

            <p>
              I approach development with a problem-solving mindset, breaking
              down complex UI challenges into simple and scalable solutions, and
              I’m continuously improving my skills in modern frontend
              development.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Image + Tool Cloud */}
        <div className="flex flex-col items-center lg:items-end w-full">
          <div className="w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img
              /* ADDED BASE_URL HERE */
              src={`${import.meta.env.BASE_URL}images/about_image.png`}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-4 max-w-[450px]">
            {tools.map((tool, index) => (
              <div
                key={index}
                title={tool.name}
                className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-white shadow-md border border-slate-50 hover:scale-110 transition-all duration-300
                  ${index % 2 === 0 ? "mt-6" : "mt-0"}
                `}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
