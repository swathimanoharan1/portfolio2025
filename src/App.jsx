import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Credit from "./components/Credit";
import Blog from "./components/Blog";
import AllBlogs from "./components/AllBlogs";
import BlogDetail from "./components/BlogDetail";
import { Routes, Route } from "react-router-dom";
import ScrollToSection from "./components/ScrollToSection";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToSection />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Blog />
              <Contact />
              <Footer />
              <Credit />
            </>
          }
        />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;
