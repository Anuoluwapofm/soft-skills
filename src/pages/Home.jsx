import React from "react";

const Home = () => {
  return (
    /* ADDED id="home" HERE */
    <div
      id="home"
      className="relative min-h-screen flex items-start justify-center bg-white px-6 overflow-hidden pt-22 md:pt-20"
    >
      {/* THE SLANT */}
      <div
        className="absolute right-0 top-0 h-full w-[57%] z-0"
        style={{
          clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
          background:
            "linear-gradient(to bottom, rgba(240, 249, 255, 0) 0%, rgba(240, 249, 255, 1) 20%)",
        }}
      ></div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between relative z-10">
        <div className="md:pl-0.2 text-left flex-1">
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold text-slate-900 leading-[0.8] tracking-tighter">
            <div className="mb-0">
              <span className="text-black font-bold text-[2.5rem]">
                Hi, I'm{" "}
              </span>
              <span className="text-blue-800 font-black text-[2.5rem]">
                Mercy Oyedele
              </span>
            </div>

            <span className="text-black font-black block mt-3">
              Front End Developer
            </span>
          </h1>

          <div className="w-14 h-[3px] bg-blue-600 mt-4 mb-4"></div>

          <p className="text-[0.95rem] text-slate-700 max-w-[340px] leading-relaxed font-semibold">
            I create modern, high-performing web and mobile experiences using
            React and React Native, focusing on clean design and usability.
          </p>

          <div className="mt-8">
            {/* Smooth scroll to projects section */}
            <a
              href="#projects"
              className="bg-blue-800 text-white px-10 py-3 rounded-lg text-xs font-bold hover:bg-blue-900 transition-all shadow-xl shadow-blue-100 uppercase tracking-widest inline-block"
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end md:pr-40 mt-12 md:mt-10">
          <div className="relative w-56 h-56 md:w-[260px] md:h-[260px]">
            <div className="absolute inset-0 rounded-full border-[5px] border-blue-800 z-10 shadow-lg shadow-blue-100"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden bg-white z-20">
              <img
                /* This automatically adds /soft-skills/ to the path */
                src={`${import.meta.env.BASE_URL}images/hero_image.png`}
                alt="Mercy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
