import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@mui/material";

const skills = [
  { name: "HTML5", icon: "bi-filetype-html", level: 90 },
  { name: "CSS3", icon: "bi-filetype-css", level: 85 },
  { name: "JavaScript", icon: "bi-filetype-js", level: 80 },
  { name: "React", icon: "bi-lightning-charge", level: 75 },
  { name: "C#", icon: "bi-filetype-cs", level: 60 },
  { name: "Python", icon: "bi-filetype-py", level: 70 },
  { name: "Node.js", icon: "bi-node-plus", level: 65 },
  { name: "GitHub", icon: "bi-github", level: 85 },
  { name: "UI Design", icon: "bi-easel", level: 80 },
  { name: "UX Design", icon: "bi-bezier2", level: 75 },
  { name: "Figma", icon: "bi-vector-pen", level: 90 },
  { name: "FigJam", icon: "bi-pencil", level: 70 },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsDropdown() {
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="text-center pt-12">
      <Button
        variant="contained"
        onClick={() => setOpen(!open)}
        sx={{
          backgroundColor: "#6f42c1",
          "&:hover": { backgroundColor: "#5a32a3" },
          borderRadius: "30px",
          px: 4,
          py: 1.5,
        }}
      >
        {open ? "Hide Skills" : "Show Skills"}
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-x-auto flex gap-6 px-6 py-8 mt-4 scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`relative min-w-[180px] group ${
                  index === 0
                    ? "ml-4 sm:ml-6"
                    : index === skills.length - 1
                    ? "mr-4 sm:mr-6"
                    : ""
                }`}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <div
                  onClick={() => setSelectedSkill(skill.name)}
                  className={`
                    cursor-pointer px-6 py-4 rounded-xl border 
                    transition-all duration-300 ease-out transform active:scale-95 
                    ${
                      selectedSkill === skill.name
                        ? "border-purple-600 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                        : "border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-white/10 text-gray-800 dark:text-gray-200"
                    }
                  `}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto text-purple-500 mb-2">
                    <i className={`bi ${skill.icon} text-xl`}></i>
                  </div>
                  <p className="text-sm font-medium text-center">
                    {skill.name}
                  </p>

                  {/* Progress bar */}
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded mt-4 overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
