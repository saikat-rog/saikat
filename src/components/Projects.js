import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projectsText = "Projects";
  const projectsInfo = [
    {
      id: 1,
      icon: faCode,
      title: "AttendMe",
      description:
        "A crossplatform application but currently available only on Android that allows students to amrk their attendance by only scanning a QR code provided by the teacher. It makes the attendance system easy and fast and spoof proof ",
    },
    {
      id: 2,
      icon: faMobile,
      title: "CloudFixMedia",
      description:
        "A web application that connects a newly developed creative marketing agency CloudFixMedia to their customers and makes the system convenient to keep contact and push updates to the customers' work status and helps the them to schedule a one to one meeting about their project content discussion.",
    },
  ];

  return (
    <div className=" w-full min-h-screen bg-deepdark text-white pl-10 pr-10 pt-16 pb-10 md:pt-28 md:pl-28 md:pr-28 ">
        <div className="text-5xl md:text-6xl font-inter font-semibold text-primarygreen flex flex-col items-center">
          {projectsText}
        </div>
      <div className=" flex flex-wrap gap-5 justify-center text-center pt-20">
        {projectsInfo.map((service) => (
          <div
            key={service.id}
            className="bg-lightdark p-10 rounded-sm flex items-start flex-col border-b-4 border-primarygreen w-96"
          >
            <FontAwesomeIcon icon={service.icon} className="text-5xl pb-10" />
            <div className="font-bold text-2xl text-start">{service.title}</div>
            <div className="text-grey pt-5 text-start">{service.description}</div>
            <button>Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
