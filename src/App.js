import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
