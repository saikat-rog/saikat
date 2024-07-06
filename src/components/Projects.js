import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from API
  const getProjects = async () => {
    try {
      const response = await Axios.get(
        "https://saikatbackend.vercel.app/api/projects"
      );
      setProjects(response.data);
      setLoading(false); // Set loading to false after successful data fetch
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Error fetching projects. Please try again later."); // Set error message
      setLoading(false); // Set loading to false in case of error
    }
  };

  // useEffect hook to fetch data on component mount
  useEffect(() => {
    getProjects();
  }, []); // Empty dependency array to run once on mount

  const projectsText = "Projects";

  return (
    <div className="w-full min-h-screen bg-deepdark text-white pl-10 pr-10 pt-16 pb-10 md:pt-28 md:pl-28 md:pr-28">
      <div className="text-5xl md:text-6xl font-inter font-semibold text-primarygreen flex flex-col items-center">
        {projectsText}
      </div>
      {loading ? (
        <p className="text-center mt-4">Loading projects...</p>
      ) : error ? (
        <p className="text-center text-red-500 mt-4">{error}</p>
      ) : (
        <div className="flex flex-wrap gap-5 justify-center text-center pt-20">
          {projects.map((project) => (
            <div
              key={project.id} // Assuming project has an 'id' field
              className="bg-lightdark p-10 rounded-sm flex items-start flex-col border-b-4 border-primarygreen w-96"
            >
              <FontAwesomeIcon icon={project.icon} className="text-5xl pb-10" />
              <div className="font-bold text-2xl text-start">
                {project.title}
              </div>
              <div className="text-grey pt-5 text-start">
                {project.description}
              </div>
              <button>Read more</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
