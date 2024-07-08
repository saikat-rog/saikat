import React from "react";
import saikatdasimage from "../assets/saikatdas.jpg";
import { Helmet } from "react-helmet";

const About = () => {
  const university = " University of Engineering & Management";

  return (
    <div className="min-h-screen bg-deepdark pr-10 pl-10 pt-28 md:pl-28 font-inter">
      <Helmet><title>About</title></Helmet>
      {/* About Summary */}
      <div className=" md:grid grid-cols-2">
        {/* About */}
        <div className="flex flex-col gap-9 items-start">
          {/* hey there! */}
          <div className="w-full">
            <h1 className=" text-primarygreen font-bold text-5xl">
              Hey there!
            </h1>
          </div>
          {/* About profession */}
          <div className=" text-grey">
            <p>
              My name is Saikat Das. Currently I am pursuing B.Tech on Computer
              Science Engineering from
              <span className=" text-primarygreen">
                <a href="https://uem.edu.in/" target="blank">
                  {university}
                </a>
              </span>{" "}
              I am working with{" "}
              <span className=" text-primarygreen">
                <a href="https://cloudfixmedia.com" target="blank">
                  CloudFixMedia
                </a>
              </span>{" "}
              as a Fullstack Developer since 2024-Present.
              <br />I worked on a Flutter project named{" "}
              <span className=" text-primarygreen">
                <a href="https://github.com/saikat-rog/attendme" target="blank">
                  AttendMe
                </a>
              </span>{" "}
              that helped my institute for the attendance Management.
              <br />
              Previously I worked with a EdTech startup as a DSA Instructor.
            </p>
          </div>
          {/* About free time */}
          <div className=" text-grey">
            <p>
              In my free time I love to learn about App optimization and problem
              solving. In other hand I am a tech news explorer and can't ignore
              listening to songs.
            </p>
          </div>
        </div>
        {/* Image */}
        <div className=" hidden md:flex flex-auto justify-center">
          <img
            src={saikatdasimage}
            alt="saikatdas"
            className="w-96 h-96 rounded-full object-cover"
          ></img>
        </div>
      </div>
      {/* About path */}
      <div className=" flex flex-col gap-5 mt-10">
        <div className=" text-primarygreen font-semibold text-xl">
          Here are some other things about me that you might want to know:
        </div>
        <div className=" text-grey w-full md:w-1/2">
          <ul className=" list-disc pl-7 md:pl-10">
            <li>
              I am completing my Bachelor of Technology from
              <a
                href="https://uem.edu.in/"
                target="blank"
                className=" text-primarygreen"
              >
                {university}
              </a>
              . I’ve specialized in Information Technology.
            </li>
            <li>
              I worked on my first personal project <span className=" text-primarygreen"><a href="https://github.com/saikat-rog/attendme" target="blank">AttendMe</a></span> (an Attendance Management system built on <span className=" text-primarygreen"><a href="https://flutter.dev" target="blank">Flutter</a></span> technology) in the
              year of 2023. I was the standalone developer for the whole project.
            </li>
            <li>
                I also started working as a part-time teacher (majorly in early days of engineering) in an EdTech startup.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
