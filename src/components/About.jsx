import { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdWork, MdSchool, MdArrowUpward } from "react-icons/md";
import useOutsideClick from "../hooks/useOutsideClick";
import "react-vertical-timeline-component/style.min.css";

/* -------------------- DATA -------------------- */

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
  "xUnit & Moq",
];

const frontendStack = [
  "Angular",
  "ReactJS",
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "Bootstrap",
  "Material-UI",
  "RESTful APIs",
  "GraphQL",
];

const dbAndAzure = ["Bitbucket", "Azure DevOps"];

const experienceData = [
  {
    title: "Senior Systems Engineer - Infosys",
    date: "Jul 2025 - Present",
    description:
      "Built scalable web applications using ASP.NET Core, developing reusable APIs, integrating third-party services, streamlining content management with Optimizely CMS.",
  },
  {
    title: "Systems Engineer - Infosys",
    date: "Jan 2023 - Jun 2025",
    description:
      "Turned designs into dynamic Angular applications and optimized backend workflows with .NET, streamlining third‑party data processing and boosting efficiency",
  },
  {
    title: "Systems Engineer Trainee - Infosys",
    date: "Aug 2022 - Jan 2023",
    description:
      "Contributed to a full‑stack project, building features across frontend, backend, and database layers while gaining hands‑on experience in end‑to‑end development.",
  },
  {
    title: "Web Development Intern - TechSnap",
    date: "Sep 2021 - Nov 2021",
    description:
      "Built responsive user interfaces with React and Bootstrap, and integrated REST APIs to deliver smooth, modern web experiences.",
  },
  {
    title: "Python Developer Intern - TechSnap",
    date: "Jul 2021 - Aug 2021",
    description:
      "- Wrote technical blogs simplifying Python concepts for learners, earning recognition as Best Intern for impactful contributions.",
  },
];

const educationData = [
  {
    college: "Dhanalakshmi Srinivasan College of Engineering, Coimbatore",
    degree: "Bachelor of Engineering",
    specialization: "Electronics and Communication Engineering – 8.2 CGPA",
    date: "2018 - 2022",
  },
];

/* -------------------- COMPONENTS -------------------- */

const SkillRow = ({ skills }) => (
  <div className="border-t border-b border-gray-700 py-6">
    <div className="flex justify-center flex-wrap gap-x-6 gap-y-4 text-base md:text-lg">
      {skills.map((tech, index) => (
        <div key={`${tech}-${index}`} className="flex items-center gap-2">
          <span>{tech}</span>
          {index !== skills.length - 1 && (
            <span className="text-red-600 text-lg">●</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

/* -------------------- MAIN -------------------- */

const About = () => {
  const [showTile, setShowTile] = useState(false);
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => setShowTile(false));

  useEffect(() => {
    document.body.style.overflow = showTile ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showTile]);

  const scrollToTop = () => {
    modalRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="about" className="py-16 text-center bg-black text-white">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <div className="w-20 h-0.5 mx-auto bg-red-500 mb-6" />

      <p className="max-w-3xl mx-auto text-gray-300 mb-12 text-lg">
        I am a Full Stack .NET developer passionate about building scalable,
        maintainable web applications with clean architecture and strong UI/UX.
      </p>

      <button
        onClick={() => setShowTile(true)}
        className="px-5 py-2 text-sm bg-gradient-to-r from-[#453634] to-[#D93D22]
        text-white rounded-full hover:opacity-90 hover:scale-110 transition"
      >
        Professional Experience
      </button>

      <div className="mt-12 space-y-6">
        <SkillRow skills={backendStack} />
        <SkillRow skills={frontendStack} />
        <SkillRow skills={dbAndAzure} />
      </div>

      {/* -------- MODAL -------- */}
      {showTile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="bg-[#1f1f1f] w-full max-w-4xl max-h-[90vh]
            overflow-y-auto rounded-xl p-6 relative border border-[#B1B0B0]"
          >
            <button
              onClick={() => setShowTile(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              <FaTimes />
            </button>

            {/* Experience */}
            <h3 className="text-2xl font-bold text-center mb-8">
              Experience Timeline
            </h3>

            <VerticalTimeline lineColor="#BFBFBF">
              {experienceData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={item.date}
                  icon={<MdWork />}
                  iconStyle={{
                    background: index === 0 ? "#D93D22" : "#453634",
                    color: "#fff",
                  }}
                  contentStyle={{ background: "#27272a", color: "#fff" }}
                  contentArrowStyle={{
                    borderRight: "7px solid #27272a",
                  }}
                >
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>

            {/* Education */}
            <h3 className="text-2xl font-bold text-center my-6">
              Education Timeline
            </h3>

            <VerticalTimeline lineColor="#BFBFBF">
              {educationData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={item.date}
                  icon={<MdSchool />}
                  iconStyle={{ background: "#453634", color: "#fff" }}
                  contentStyle={{ background: "#27272a", color: "#fff" }}
                  contentArrowStyle={{
                    borderRight: "7px solid #27272a",
                  }}
                >
                  <h4 className="text-lg font-semibold">{item.college}</h4>
                  <p className="text-gray-300 mt-2">{item.degree}</p>
                  <p className="text-gray-300">{item.specialization}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>

            {/* Scroll to top */}
            <VerticalTimeline>
              <VerticalTimelineElement
                icon={
                  <MdArrowUpward
                    onClick={scrollToTop}
                    className="cursor-pointer hover:scale-110 transition"
                  />
                }
                iconStyle={{ background: "#d9d9d9", color: "#000" }}
              />
            </VerticalTimeline>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
