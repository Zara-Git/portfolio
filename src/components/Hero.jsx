import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Typewriter } from "react-simple-typewriter";
import { projects } from "../Data/projects";
import { Link } from "react-router-dom";
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
        <Link
          to="/about"
          className="text-purple-600 hover:underline text-sm font-medium"
        >
          About Me
        </Link>

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
    </>
  );
}
