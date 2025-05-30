import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-10 border-t border-transparent relative">
      {/* Bottom gradient line */}
      <div className="bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 fixed" />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-6">
        {/* Left Side - Portfolio Name */}
        <div className="text-lg font-semibold">Swathi 2025</div>

        {/* Center - Social Links */}
        <div className="flex gap-6 text-base">
          <a
            href="https://youtube.com"
            className="text-red-500 hover:text-red-600 transition"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://instagram.com"
            className="text-white hover:text-pink-400 transition"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/swathi-m28/"
            className="text-white hover:text-blue-400 transition"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        {/* Right Side - Hire Me Button */}
        <a
          target="_blank"
          href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=swathimanoharan45303@gmail.com&tf=1"
          className="bg-gradient-to-r from-[#453634] to-[#D93D22] text-white px-6 py-2 rounded-full font-semibold shadow hover:brightness-110 transform transition-transform duration-500 ease-in-out hover:scale-110"
        >
          Hire me
        </a>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => scroll.scrollToTop()}
        className="fixed bottom-6 right-6 bg-red-600 text-white hover:bg-red-500 hover:text-black p-3 rounded-full shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-110"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
