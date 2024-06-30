import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  const homeDescription =
    "I’m from Kolkata and I have been pursuing Computer Science Engineering. I am skilled in Flutter for cross platform development and efficient on React and Tailwind.";
  
    const emailAddress = "saikat.rog@gmail.com";
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="p-10 md:p-28 flex flex-col justify-center items-start h-screen w-full bg-deepdark">
      <div className=" text-primarygreen font-semibold text-2xl md:text-3xl">
        Hello! I'm Saikat Das
      </div>
      <div className=" text-white font-bold text-4xl md:text-7xl">
        Software Developer |
      </div>
      <div className=" text-grey pt-3 md:pt-8 pb-3 md:pb-8 w-96">
        {homeDescription}
      </div>
      <div className=" flex flex-row gap-8">
        <button className=" bg-primarygreen w-32 h-11 text-white" onClick={handleEmailClick}>
          Email me
        </button>
        <button className=" text-grey">
          <FontAwesomeIcon icon={faDownload} />
          <span className=" pl-3">Download CV</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
