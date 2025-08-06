import React, { useState } from "react";
import { projects } from "../Data/projects";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      {projects.map((project, index) => (
        <div
          key={index}
          className="mb-8 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md"
        >
          <button
            onClick={() => toggleCollapse(index)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {project.title}
            <span>{activeIndex === index ? "−" : "+"}</span>
          </button>

          {activeIndex === index && (
            <div className="p-4 space-y-4 bg-white dark:bg-gray-900 transition">
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {project.description}
              </p>
              {project.video && (
                <video
                  src={project.video}
                  controls
                  className="w-full rounded-lg"
                />
              )}
              {project.images &&
                project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Project ${index + 1} screenshot ${i + 1}`}
                    className="w-full rounded-lg shadow"
                  />
                ))}
              <a
                href={project.github}
                target="_blank"
                className="inline-block mt-2 text-blue-500 hover:underline"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
