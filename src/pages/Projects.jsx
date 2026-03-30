import React from "react";
import "../App.css";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      title: "Pizza Menu Online Ordering",
      description:
        "A simple web project for a pizza shop that lets users browse pizzas, customize their orders, and place them online.",
      isPizzaProject: true,
      github: "https://github.com/Anuoluwapofm/Pizza-Menu", // Replace with your link
      live: "https://anuoluwapofm.github.io/Pizza-Menu/",
    },
    {
      id: 2,
      title: "Travel List App",
      description:
        "Mobile-responsive travel app for planning trips and discovering destinations.",
      image: "images/Travel_image.png",
      github: "https://github.com/Anuoluwapofm/Travel-list",
      live: "https://anuoluwapofm.github.io/Travel-list/",
    },
    {
      id: 3,
      title: "MediTrack App",
      description:
        "A mobile app for tracking medication schedules and managing health information.",
      image: "images/splash_screen.png",
      github: "https://github.com/Anuoluwapofm/MediTrack",
      live: "https://anuoluwapofm.github.io/MediTrack/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-50 py-20 px-6 md:px-10 lg:px-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-black uppercase">
          Featured <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Projects that highlight my skills and passion for web development.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#222222] rounded-3xl overflow-hidden shadow-xl border border-white/5 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
              {project.isPizzaProject ? (
                <div className="relative w-full h-full flex items-center justify-center bg-orange-50/5">
                  <img
                    src="images/pizzas/margherita.jpg"
                    className="w-28 h-28 rounded-full object-cover shadow-2xl animate-stroll z-20 border-4 border-[#222222]"
                    alt="pizza"
                  />
                  <img
                    src="images/pizzas/prosciutto.jpg"
                    className="absolute top-6 left-6 w-16 h-16 rounded-full object-cover opacity-60 animate-stroll delay-1 z-10"
                    alt="pizza"
                  />
                  <img
                    src="images/pizzas/focaccia.jpg"
                    className="absolute bottom-6 right-6 w-20 h-20 rounded-full object-cover opacity-40 animate-stroll delay-2 z-10"
                    alt="pizza"
                  />
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              )}
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* BUTTON GROUP */}
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-900/20"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
