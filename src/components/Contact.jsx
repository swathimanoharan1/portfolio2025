import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16 text-center bg-[#121212] text-white">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <div className="w-20 h-0.5 mx-auto bg-red-500 mb-6" />
      <p className="mb-8 text-gray-600 dark:text-gray-300">
        Got an idea, a question, or just want to say hi? I’m all ears (and
        eyes)! <br />
        Drop a message below and I’ll get back to you as soon as I can. Let's
        create something awesome together!
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-5xl mx-auto flex flex-col items-center space-y-6"
      >
        <div className="flex flex-col md:flex-row w-full gap-6 ">
          {/* Left side */}
          <div className="flex flex-col w-full md:w-1/2 space-y-12">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full p-3 rounded bg-white text-black placeholder-gray-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="example@example.com"
              required
              className="w-full p-3 rounded bg-white text-black placeholder-gray-500"
            />
          </div>

          {/* Right side */}
          <textarea
            name="message"
            placeholder="Enter your message here"
            required
            rows="5"
            className="w-full md:w-1/2 p-3 rounded bg-white text-black placeholder-gray-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-10 px-8 py-2 text-sm bg-gradient-to-r from-[#453634] to-[#D93D22] text-white rounded-full shadow-md hover:opacity-90  transform transition-transform duration-500 ease-in-out hover:scale-110"
        >
          Submit
        </button>

        {done && (
          <p className="text-[#b6b4a2] mt-4 font-semibold">
            Thanks a bunch! I’ll get back to you ASAP!
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
