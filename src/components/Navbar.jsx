import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f0f0f] py-4 px-6 sm:px-10 lg:px-20 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold tracking-widest text-white">
        SWATHI<span className="text-red-600">.</span>
      </h1>

      <ul className="flex space-x-8 text-sm sm:text-base font-medium items-center">
        {/* Links visible only on medium and larger screens */}
        <li className="hidden md:block transform transition-transform duration-500 ease-in-out hover:scale-110">
          <RouterLink
            to="/#home"
            className="cursor-pointer text-white hover:text-orange-500 transition"
          >
            Home
          </RouterLink>
        </li>
        <li className="hidden md:block transition-transform duration-500 ease-in-out hover:scale-110">
          <RouterLink
            to="/#projects"
            className="cursor-pointer text-white hover:text-orange-500 transition"
          >
            Projects
          </RouterLink>
        </li>
        <li className="hidden md:block transition-transform duration-500 ease-in-out hover:scale-110">
          <RouterLink
            to="/blogs"
            className="text-white hover:text-orange-500 transition"
          >
            Blogs
          </RouterLink>
        </li>
        {/* Contact button always visible */}
        <li>
          <RouterLink to="/#contact" className="cursor-pointer">
            <button className="bg-white text-red-500 font-bold px-5 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
              Contact
            </button>
          </RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
