import { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import useOutsideClick from "../hooks/useOutsideClick";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdWork, MdSchool, MdArrowUpward } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [showTile, setShowTile] = useState(false);
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => setShowTile(false));
  useEffect(() => {
    if (showTile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showTile]);

  const backendStack = [
    "ASP.NET Core",
    "C#",
    "EF Core",
    "WebAPI",
    "MS SQL Server",
    "Optimizely CMS",
    "Optimizely Graph",
    "Python",
    "Django",
  ];

  const frontendStack = [
    "AngularTS",
    "ReactJS",
    "HTML & CSS",
    "JavaScript",
    "TypeScript",
    "BootStrap",
    "Material-UI",
    "RESTful APIs",
    "GraphQL",
  ];

  const experienceData = [
    {
      title: "Systems Engineer - Infosys",
      date: "Jan, 2023 - present",
      description:
        "Worked as an Angular Developer, transforming designs into functional code for an internal project." +
        "Worked as a .NET Developer, retrieved data from third-party websites, converted it to the desired format, and significantly reduced processing time.",
    },
    {
      title: "Systems Engineer Trainee - Infosys",
      date: "Aug, 2022 - Jan, 2023",
      description:
        "Collaborated with the team to develop a full-stack application, contributing to front-end, back-end, and database development.",
    },
    {
      title: "Web Development Intern - TechSnap",
      date: "Sep, 2021 - Nov, 2021",
      description:
        "Built front-end UIs using React, Bootstrap and integrated APIs.",
    },
    {
      title: "Python Developer Intren - TechSnap",
      date: "Jul, 2021 - Aug, 2021",
      description:
        "Carefully crafted four blogs on various Python core concepts and award as Best Intern for my work.",
    },
  ];

  const educationData = [
    {
      college: "Dhanalakshmi Srinivasan College of Engineering, Coimbatore",
      degree: "Bachelor of Engineering",
      specialization: "Electronics and Communication Engineering - 8.2",
      date: "2018 - 2022",
    },
  ];

  // scroll smoothly to the top
  const scrollToTop = () => {
    if (modalRef.current) {
      modalRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="about"
      className="py-16 text-center bg-black text-white relative"
    >
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <div className="w-20 h-0.5 mx-auto bg-red-500 mb-6" />
      <p className="max-w-3xl mx-auto text-gray-300 mb-12 text-lg">
        I am a Full Stack .NET developer passionate about building scalable and
        maintainable web applications. I enjoy learning new technologies and
        solving real-world problems with clean code and effective UI/UX.
      </p>

      {/* Experience Button */}
      <button
        onClick={() => setShowTile(true)}
        className="px-5 py-2 text-sm bg-gradient-to-r from-[#453634] to-[#D93D22] text-white rounded-full hover:opacity-90 transform transition-transform duration-500 ease-in-out hover:scale-110"
      >
        Professional Experience
      </button>

      {/* Backend Skills */}
      <div className="border-t border-b border-gray-700 py-6 mb-4 mt-12">
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-4 text-base sm:text-base md:text-lg">
          {backendStack.map((tech, index) => (
            <div key={tech} className="flex items-center gap-2">
              <span>{tech}</span>
              {index !== backendStack.length - 1 && (
                <span className="text-red-600 text-lg">●</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Frontend Skills */}
      <div className="border-t border-b border-gray-700 py-6">
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-4 text-base sm:text-base md:text-lg">
          {frontendStack.map((tech, index) => (
            <div key={tech} className="flex items-center gap-2">
              <span>{tech}</span>
              {index !== frontendStack.length - 1 && (
                <span className="text-red-600 text-lg">●</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience Tile Modal */}
      {showTile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60 transition-opacity duration-300 ">
          <div
            ref={modalRef}
            className="bg-[#1f1f1f] rounded-xl p-6 w-full max-w-4xl shadow-lg border  border-[#B1B0B0] shadow-[#B1B0B0]/50 max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowTile(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>

            {/* Experience Timeline */}
            <h3 className="text-2xl font-bold text-center mb-8">
              Experience Timeline
            </h3>
            <VerticalTimeline lineColor="#BFBFBF">
              {experienceData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  contentStyle={{ background: "#27272a", color: "#fff" }}
                  contentArrowStyle={{ borderRight: "7px solid #27272a" }}
                  date={item.date}
                  iconStyle={{
                    background: index === 0 ? "#D93D22" : "#453634",
                    color: "#fff",
                  }}
                  icon={<MdWork />}
                >
                  <h4 className="vertical-timeline-element-title text-lg font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>

            {/* Education Timeline */}
            <h3 className="text-2xl font-bold text-center m-4">
              Education Timeline
            </h3>
            <VerticalTimeline lineColor="#BFBFBF">
              {educationData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  contentStyle={{ background: "#27272a", color: "#fff" }}
                  contentArrowStyle={{ borderRight: "7px solid #27272a" }}
                  date={item.date}
                  iconStyle={{ background: "#453634", color: "#fff" }}
                  icon={<MdSchool />}
                >
                  <h4 className="vertical-timeline-element-title text-lg font-semibold">
                    {item.college}
                  </h4>
                  <p className="text-gray-300 mt-2">{item.degree}</p>
                  <p className="text-gray-300 mt-2">{item.specialization}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--arrow cursor-pointer"
                iconStyle={{ background: "#d9d9d9", color: "#000000" }}
                icon={
                  <MdArrowUpward
                    onClick={scrollToTop}
                    className="hover:scale-110 transition-transform"
                  />
                }
              ></VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
