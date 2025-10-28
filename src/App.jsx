import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // show welcome once per session
    try {
      const seen = sessionStorage.getItem("seenWelcome");
      if (!seen) {
        setShowWelcome(true);
        sessionStorage.setItem("seenWelcome", "1");
      }
    } catch {
      // ignore sessionStorage errors
      setShowWelcome(true);
    }
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />

      <Modal
        visible={showWelcome}
        title={"Welcome"}
        message={"Welcome — thanks for visiting my portfolio. Feel free to look around and get in touch!"}
        primary={"Explore"}
        onPrimary={() => setShowWelcome(false)}
      />
    </div>
  );
}
