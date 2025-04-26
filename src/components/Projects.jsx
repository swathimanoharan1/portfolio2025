import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const projects = [
  {
    // Project 1
    title: "Blogging Website",
    description:
      "This project is a dynamic blog search system built using Python and Django, enhanced with AJAX and jQuery for a seamless user experience. " +
      "It enables users to search for blog posts in real-time. " +
      "As users type in the search bar, they receive instant suggestions of blog titles that match their input, improving content discoverability and user interaction.",
    tech: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "Bootstrap",
      "AJAX",
      "jQuery",
      "PostgreSQL",
    ],
    features: [
      "🔸 Backend: Python & Django",
      "Django ORM: Efficiently queries the database to fetch blog titles using `istartswith`, enabling case-insensitive real-time suggestions.",
      "Class-based and Function-based Views: Handles data fetching and returns JSON responses.",
      "URL Routing: Uses Django’s clean URL routing system.",
      "JSON Response Handling: Sends structured responses with `JsonResponse`.",
      "Model Integration: Blog posts are stored in a Django model.",
      "🔸 Frontend Integration: jQuery & AJAX",
      "AJAX Requests: Sends asynchronous GET requests while user types.",
      "Real-time UI Update: Updates the DOM with matching blog titles.",
      "Minimal Delay: Smooth experience via lightweight AJAX calls.",
    ],
    image: "/CodeCraft.png",
    link: "https://cc-blog-sigma.vercel.app/",
    github: "https://github.com/swathimanoharan1/CCBlog",
  },

  // Project 2
  {
    title: "Ecommerce Website",
    description:
      "Developed a feature-rich e-commerce platform with Spring Boot, providing a seamless experience for managing customers, products, orders, and reviews." +
      "The platform supports essential e-commerce functionalities and incorporates a robust search feature for efficient product discovery.",
    tech: ["SpringBoot", "Java", "MongoDB"],
    features: [
      "🔸 Backend: SpringBoot & Java",
      "Customer Management: Implemented CRUD operations for customer profiles, including address management and order history.",
      "Order Processing: Facilitated order creation, updating, and tracking with comprehensive payment integration.",
      "Cart Functionality: Enabled cart creation, product addition, quantity updates, and item removal. Included calculation of total cart price and state persistence.",
      "Product Catalog: Managed product details, including categories, reviews, and stock availability. Featured search capabilities to filter products based on various criteria.",
      "Review System: Allowed customers to add, update, and delete product reviews with rating and descriptive feedback.",
      "Search Feature: Enabled search across multiple entities including products, customers, and orders based on specific criteria.",
    ],
    image: "/IconicThreads.png",
    //link: "https://github.com/yourusername/portfolio",
    github: "https://github.com/swathimanoharan1/IconicThreads",
  },

  // Project 3
  {
    title: "Python Projects",
    description:
      "Developed multiple Python projects, showcasing my proficiency in both core Python and GUI development.",
    tech: ["Python", "Tkinter"],
    features: [
      "🔸 Backend: Python & Tkinter",
      "Library Management: A console-based Python application for managing a library's book inventory, including adding, removing, issuing, and returning books with data stored in CSV files.",
      "Password Manager: A Python based tool for generating, storing, and managing passwords with encryption and a command-line interface.",
      "Resume Generator: This project automates the creation of a polished resume, improving efficiency and consistency for users who need to generate resumes quickly and accurately.",
      "Tkinter Projects: This bunch of projects demonstrate practical use of Tkinter for creating a graphical user interface and showcases an engaging color scheme to enhance user experience.",
    ],
    image: "/Pythonprojects.jpg",
    //link: "https://github.com/yourusername/sql-editor",
    github: "https://github.com/swathimanoharan1/PythonProjects",
  },
  // Project 4
  // {
  //   title: "Library Management System",
  //   description:
  //     "A core Python project using file handling and CRUD operations to manage book records.",
  //   tech: ["Python", "CSV", "File I/O"],
  //   features: [
  //     "🔸 Backend: Python & Django",
  //     "Django ORM: Efficiently queries the database to fetch blog titles using `istartswith`, enabling case-insensitive real-time suggestions.",
  //     "Class-based and Function-based Views: Handles data fetching and returns JSON responses.",
  //     "URL Routing: Uses Django’s clean URL routing system.",
  //     "JSON Response Handling: Sends structured responses with `JsonResponse`.",
  //     "Model Integration: Blog posts are stored in a Django model.",
  //     "🔸 Frontend Integration: jQuery & AJAX",
  //     "AJAX Requests: Sends asynchronous GET requests while user types.",
  //     "Real-time UI Update: Updates the DOM with matching blog titles.",
  //     "Minimal Delay: Smooth experience via lightweight AJAX calls.",
  //   ],
  //   image: "./src/assets/Projects/CodeCraft.png",
  //   link: "https://github.com/yourusername/library-management",
  //   github: "https://github.com/yourusername/library-management",
  // },
  // Project 5
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio site built with React, featuring dark/light mode and smooth UX.",
    tech: ["React", "Tailwind CSS"],
    features: [
      "🔸 Backend: Python & Django",
      "Django ORM: Efficiently queries the database to fetch blog titles using `istartswith`, enabling case-insensitive real-time suggestions.",
      "Class-based and Function-based Views: Handles data fetching and returns JSON responses.",
      "URL Routing: Uses Django’s clean URL routing system.",
      "JSON Response Handling: Sends structured responses with `JsonResponse`.",
      "Model Integration: Blog posts are stored in a Django model.",
      "🔸 Frontend Integration: jQuery & AJAX",
      "AJAX Requests: Sends asynchronous GET requests while user types.",
      "Real-time UI Update: Updates the DOM with matching blog titles.",
      "Minimal Delay: Smooth experience via lightweight AJAX calls.",
    ],
    image: "/portfolio2025.png",
    link: "https://portfolio2025-gold-ten.vercel.app/",
    github: "https://github.com/swathimanoharan1/portfolio2025",
  },
  // Project 6
  // {
  //   title: "SQL Editor",
  //   description:
  //     "An Angular-based SQL editor for an e-commerce system with dropdowns and fill-in inputs.",
  //   tech: ["Angular", ".NET API", "SQL Server"],
  //   features: [
  //     "🔸 Backend: Python & Django",
  //     "Django ORM: Efficiently queries the database to fetch blog titles using `istartswith`, enabling case-insensitive real-time suggestions.",
  //     "Class-based and Function-based Views: Handles data fetching and returns JSON responses.",
  //     "URL Routing: Uses Django’s clean URL routing system.",
  //     "JSON Response Handling: Sends structured responses with `JsonResponse`.",
  //     "Model Integration: Blog posts are stored in a Django model.",
  //     "🔸 Frontend Integration: jQuery & AJAX",
  //     "AJAX Requests: Sends asynchronous GET requests while user types.",
  //     "Real-time UI Update: Updates the DOM with matching blog titles.",
  //     "Minimal Delay: Smooth experience via lightweight AJAX calls.",
  //   ],
  //   image: "./src/assets/Projects/CodeCraft.png",
  //   link: "https://github.com/yourusername/sql-editor",
  //   github: "https://github.com/yourusername/sql-editor",
  // },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const initialVisible = 2;
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => setSelectedProject(null));
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisible);
  };

  return (
    <section id="projects" className="py-16 text-center">
      <h2 className="text-3xl font-semibold mb-2">Projects</h2>
      <div className="w-20 h-0.5 bg-red-500 mx-auto mb-10 rounded-full"> </div>
      <div className="grid md:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">
        {projects.slice(0, visibleCount).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => setSelectedProject(project)}
            className="bg-[#1c1c1c] cursor-pointer rounded-xl p-4 shadow-md border border-gray-700 hover:scale-[1.02] transition"
          >
            <div className="h-52 w-full bg-gradient-to-r from-[#453634] to-[#D93D22] text-white rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover rounded-lg mb-4"
              />
            </div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <div className="flex gap-2 text-white text-sm">
                <a
                  href={project.link}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 justify-start">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show more/less button */}
      {visibleCount < projects.length ? (
        <button
          className="mt-10 px-5 py-2 text-sm bg-gradient-to-r from-[#453634] to-[#D93D22] text-white rounded-full hover:opacity-90 transform transition-transform duration-500 ease-in-out hover:scale-110"
          onClick={handleShowMore}
        >
          Show more
        </button>
      ) : (
        <button
          className="mt-10 px-5 py-2 text-sm bg-gradient-to-r from-[#453634] to-[#D93D22] text-white rounded-full hover:opacity-90 transform transition-transform duration-500 ease-in-out hover:scale-110"
          onClick={handleShowLess}
        >
          Show less
        </button>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1c1c1c] p-6 rounded-xl w-full max-w-3xl text-left text-white space-y-4 max-h-[90vh] overflow-y-auto relative"
              >
                <Dialog.Panel>
                  {/* title */}
                  <Dialog.Title className="text-xl font-bold text-white text-center mb-7">
                    {selectedProject?.title}
                  </Dialog.Title>

                  {/* image */}
                  <div className="h-48 bg-gradient-to-r from-[#453634] to-[#D93D22] text-white rounded-lg">
                    <img
                      src={selectedProject?.image}
                      alt={selectedProject?.title}
                      className="h-52 w-full object-cover rounded-lg mb-4"
                    />
                  </div>
                  <p className="py-4 text-gray-300">
                    {selectedProject?.description}
                  </p>

                  {/* features */}
                  <h4 className="text-lg font-semibold text-[#b6b4a2] mt-4">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {selectedProject?.features.map((feature, i) => (
                      <p
                        key={i}
                        className={`text-sm leading-relaxed ${
                          feature.startsWith("🔸")
                            ? "text-gray-300 font-semibold mt-2"
                            : "text-gray-400"
                        }`}
                      >
                        {feature}
                      </p>
                    ))}
                  </div>

                  {/* tech */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* links */}
                  <div className="flex gap-4 pt-2 text-[#b6b4a2]">
                    <a
                      href={selectedProject?.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                    <a
                      href={selectedProject?.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                  >
                    &times;
                  </button>
                </Dialog.Panel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
