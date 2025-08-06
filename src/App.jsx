import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import SkillsDropdown from "./components/SkillsDropdown";
import BackgroundMusicPlayer from "./components/BackgroundMusicPlayer";
import Projects from "./components/Projects";
import { projects } from "./Data/projects";
import AboutMePage from "./pages/AboutMePage";

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-black transition-colors duration-300">
        <Routes>
          {/* صفحه اصلی */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SkillsDropdown />
                <Projects fullProjects={projects} />
                <BackgroundMusicPlayer />
              </>
            }
          />

          {/* صفحه About */}
          <Route path="/about" element={<AboutMePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
