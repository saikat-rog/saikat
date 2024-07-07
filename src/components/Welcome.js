import React from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const emailAddress = "saikat.rog@gmail.com";
export const handleEmailClick = () => {
  window.location.href = `mailto:${emailAddress}`;
};

const downloadResume = async () => {
  try {
    const response = await Axios.get(
      "https://saikatbackend.vercel.app/api/downloadResume",
      {
        responseType: "blob",
      }
    );
    // Create a URL from the Blob
    const url = window.URL.createObjectURL(new Blob([response.data]));
    // Create a link element
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "resume.pdf"); // or any other extension
    // Append the link to the body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document
    link.parentNode.removeChild(link);
  } catch (error) {
    console.error("Error in downloading resume,", error);
  }
};

const Welcome = () => {
  const homeDescription =
    "I’m from Kolkata and I have been pursuing Computer Science Engineering. I am skilled in Flutter for cross platform development and efficient on React and Tailwind frontend framework and Node js for backend and Mongo DB for the Database.";

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
        <button
          className=" bg-primarygreen w-32 h-11 text-white"
          onClick={handleEmailClick}
        >
          Email me
        </button>
        <button className=" text-grey" onClick={downloadResume}>
          <FontAwesomeIcon icon={faDownload} />
          <span className=" pl-3">Download CV</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
