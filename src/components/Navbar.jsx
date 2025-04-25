const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f0f0f] py-4 px-6 sm:px-10 lg:px-20 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold tracking-widest text-white">
        SWATHI<span className="text-red-600">.</span>
      </h1>

      <ul className="flex space-x-8 text-sm sm:text-base font-medium items-center">
        {/* Links visible only on medium and larger screens */}
        <li className="hidden md:block transform transition-transform duration-500 ease-in-out hover:scale-110">
          <a
            href="#home"
            className="text-white hover:text-orange-500 transition"
          >
            Home
          </a>
        </li>
        <li className="hidden md:block transition-transform duration-500 ease-in-out hover:scale-110">
          <a
            href="#about"
            className="text-white hover:text-orange-500 transition"
          >
            About
          </a>
        </li>
        <li className="hidden md:block transition-transform duration-500 ease-in-out hover:scale-110">
          <a
            href="#projects"
            className="text-white hover:text-orange-500 transition"
          >
            Projects
          </a>
        </li>
        {/* Contact button always visible */}
        <li>
          <a href="#contact">
            <button className="bg-white text-red-500 font-bold px-5 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
              Contact
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
