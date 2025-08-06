import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects({ fullProjects }) {
  return (
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
  );
}
