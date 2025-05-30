import { FaLinkedin, FaEnvelope } from "react-icons/fa";
const Credit = () => {
  return (
    <section>
      {/* Ribbon Section */}
      <div className="w-full text-sm bg-[#1f1f1f] text-white py-2 px-4 flex flex-col sm:flex-row items-center justify-center gap-8 ">
        <p className="text-center sm:text-left">
          ♡ Designed by{" "}
          <span className="text-red-400 font-medium">Sree Ram</span>
        </p>
        <div className="flex gap-3 text-lg">
          <a
            href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sreeram8122@gmail.com&tf=1"
            className="text-white hover:text-red-400 transition"
            title="Sree Ram's Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/sree-ram-m/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-blue-400 transition"
            title="Sree Ram's LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-center sm:text-left">
          Developed by <span className="text-red-400 font-medium">Swathi</span>
        </p>
      </div>
    </section>
  );
};
export default Credit;
