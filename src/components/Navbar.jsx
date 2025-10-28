import React, { useState } from "react";
import myPhoto from "../assets/myphoto.jpg.png";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Smooth scroll
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 64, // adjust for navbar height
        behavior: "smooth",
      });
    }
    setOpen(false); // close menu on mobile
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Brand with profile image */}
        <div className="nav-brand">
          <img src={myPhoto} alt="Apu" className="nav-avatar" />
          <div className="brand-text">
            <span className="brand-name">Md Sharifuzzaman Apu</span>
            <span className="brand-sub">Computer Engineer</span>
          </div>
        </div>

        {/* Hamburger button */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="hamburger">☰</span>
        </button>

        {/* Navigation links */}
        <nav id="primary-navigation" className={`nav-links ${open ? "open" : ""}`}>
          <a className="nav-link" href="#hero" onClick={(e) => handleScroll(e, "hero")}>
            Home
          </a>
          <a className="nav-link" href="#skills" onClick={(e) => handleScroll(e, "skills")}>
            Skills
          </a>
          <a className="nav-link" href="#projects" onClick={(e) => handleScroll(e, "projects")}>
            Projects
          </a>
          <a className="nav-link" href="#about" onClick={(e) => handleScroll(e, "about")}>
            About Me
          </a>
          <a
            className="nav-link contact-btn"
            href="#contact"
            role="button"
            onClick={(e) => handleScroll(e, "contact")}
            aria-label="Contact — open contact section"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
