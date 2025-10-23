import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}
