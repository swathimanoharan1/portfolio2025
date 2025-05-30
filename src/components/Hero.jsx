import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { LuArrowDownToLine } from "react-icons/lu";
import heroImage from "../assets/Heroimage.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 pt-28 md:pt-16 pb-16 bg-[#0f0f0f] text-white"
    >
      {/* Left Content */}
      <div className="max-w-2xl text-center md:text-left mt-8 md:mt-0 mx-5">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          I’m Swathi
          <br />
          Full Stack .Net Developer
        </h1>

        {/* Social & Download */}
        <div className="flex flex-wrap sm:flex-row sm:flex-wrap gap-5 justify-center md:justify-start items-center mt-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/swathi-m28/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-xl transform transition-transform duration-500 ease-in-out hover:scale-125 "
          >
            <FaLinkedin />
          </a>
          {/* Mail */}
          <a
            href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=swathimanoharan45303@gmail.com&tf=1"
            className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-xl transform transition-transform duration-500 ease-in-out hover:scale-125 "
          >
            <BiLogoGmail />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/swathimanoharan1"
            className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-xl transform transition-transform duration-500 ease-in-out hover:scale-125 "
          >
            <FaGithub />
          </a>

          {/* Download CV Button */}
          <a
            href="/SwathiMResume.pdf"
            download
            className="flex items-center gap-2 bg-gradient-to-r from-[#453634] to-[#D93D22] text-white px-4 py-2 rounded-lg font-medium shadow-md hover:opacity-90 text-sm transform transition-transform duration-500 ease-in-out hover:scale-110"
          >
            <LuArrowDownToLine /> Download CV
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:ml-8">
        <img
          src={heroImage}
          alt="Swathi"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-red-500 shadow-red-500/50 shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
