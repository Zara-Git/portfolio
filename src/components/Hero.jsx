import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Typewriter } from "react-simple-typewriter";
import { projects } from "../Data/projects";
import { Navigation, Pagination } from "swiper/modules";

const trustChecker = {
  title: "Trust Checker App",
  description:
    "An advanced fullstack web application that evaluates website trustworthiness by analyzing domain details, SSL certificates, WHOIS data, and Google Safe Browsing status. Frontend is built with React and MUI (Material UI) to offer a responsive and modern UI, including dark/light theme toggling, animations, and validation. Backend uses Express.js with integrations like WHOIS lookup, SSL checker, and Google's security API. Users can input a domain name, get real-time insights, and see scan history stored in localStorage. The project emphasizes fullstack architecture, API integration, and polished UI/UX for real-world utility.",
  github: "https://github.com/Zara-Git/Trust-Checker",
  demo: "/trustchecker.mp4",
  image: "/Screenshot1.png",
};

const fullProjects = [trustChecker, ...projects];

export default function Hero() {
  return (
    <>
      <header
        id="home"
        className="min-h-[100vh] flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pt-32"
      >
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-black w-56 h-56 mx-auto"></div>
          <img
            src="/protofile.jpg"
            alt="Zara Rangkhoni"
            className="relative z-10 w-56 h-56 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
          />
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">
          Hello, I'm <span className="font-semibold">Zara Rangkhoni</span>
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-3 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            <Typewriter
              words={["Frontend Developer", "UI Designer", "React Lover"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
          I build clean, accessible and responsive web interfaces using React,
          Tailwind CSS, and design systems. Passionate about fintech &
          user-centered products.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button
            className="px-8 py-3 border rounded-full text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            data-bs-toggle="offcanvas"
            data-bs-target="#resumeCanvas"
            aria-controls="resumeCanvas"
          >
            Download CV
          </button>
          <button
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 border rounded-full text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Projects
          </button>
          <a
            href="https://github.com/Zara-Git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border rounded-full text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            GitHub
          </a>

          {/* Resume Offcanvas */}
          <div
            className="offcanvas offcanvas-bottom h-100"
            tabIndex="-1"
            id="resumeCanvas"
            aria-labelledby="resumeCanvasLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn btn-outline-secondary me-3"
                data-bs-dismiss="offcanvas"
                aria-label="Back"
              >
                ← Back
              </button>
              <h5 className="offcanvas-title" id="resumeCanvasLabel">
                My Resume
              </h5>
            </div>
            <div className="offcanvas-body p-0">
              <iframe
                src="/Resume__ZaraRangkhoni.pdf"
                title="Resume"
                className="w-100 h-100 border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </header>

      {/* Swiper Projects Section */}
      <section
        id="projects"
        className="py-24 bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-[#1a1a1a] dark:to-[#121212] w-full"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 drop-shadow-md">
            🚀 My Projects
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Explore some of my recent work built with modern web technologies.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
          >
            {fullProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 md:p-10 transition-transform duration-300 text-center">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg shadow-md mx-auto mb-6"
                    />
                  )}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
