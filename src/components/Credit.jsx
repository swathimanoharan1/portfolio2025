import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Credit = () => {
  return (
    <section>
      {/* Ribbon Section */}
      <div className="w-full text-sm bg-[#1f1f1f] text-white py-2 px-4 flex flex-col sm:flex-row items-center justify-center gap-8 ">
        <p className="text-center sm:text-left">
            ♡ Designed and developed by{" "}
          <span className="text-red-400 font-medium">Sree Ram</span>
        </p>
        <div className="flex gap-5 text-lg">
          <a
            href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sreeram8122@gmail.com&tf=1"
            className="text-white hover:text-red-400 transition"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/sree-ram-m/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-blue-400 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Credit;
