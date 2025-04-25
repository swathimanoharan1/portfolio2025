import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Credit from "./components/Credit";

function App() {
  return (
      <div className="bg-white dark:bg-[#121212] text-black dark:text-white transition-colors duration-300 ">
        <Navbar />
        <main className="px-4 sm:px-8 md:px-16 lg:px-24">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Credit />
      </div>
  );
}

export default App;
