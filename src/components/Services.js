import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const servicesText = "Discover the best services I offer, designed to ensure the success of your project.";
  const servicesInfo = [
    {
      id: 1,
      icon: faCode,
      title: "Frontend Development",
      description:
        "Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS.",
    },
    {
      id: 2,
      icon: faMobile,
      title: "CrossPlatform Development",
      description:
        "Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS.",
    },
    {
      id: 3,
      icon: faCode,
      title: "Frontend Development",
      description:
        "Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS.",
    },
  ];

  return (
    <div className=" w-full min-h-screen bg-deepdark text-white p-10 md:pl-28 md:pr-28">
      <div className=" flex flex-col md:flex-row justify-between">
        <div className="text-2xl md:text-4xl font-inter font-semibold">
          2+ years <br />
          on Software Development
        </div>
        <div className=" flex flex-col pt-5 md:pt-0">
          <span className=" text-primarygreen font-bold text-xl">
            &mdash; Services
          </span>
          <span className=" text-grey md:w-96">
            {servicesText}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between text-center pt-20">
        {servicesInfo.map((service) => (
          <div
            key={service.id}
            className="bg-lightdark p-10 rounded-sm flex items-start text-start flex-col border-b-4 border-primarygreen"
          >
            <FontAwesomeIcon icon={service.icon} className="text-5xl pb-10" />
            <div className="font-bold text-2xl">{service.title}</div>
            <div className="text-grey pt-5">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
