import React, { useState } from "react";
import myPhoto from "../assets/myphoto.jpg.png";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 12px",
  };

  // Smooth scroll
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // adjust for navbar height
        behavior: "smooth",
      });
    }
    setOpen(false); // close menu on mobile
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Brand with profile image */}
        <div className="nav-brand" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={myPhoto}
            alt="Apu"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              border: "2px solid #00bcd4",
              objectFit: "cover",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: "1" }}>
            <span style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#fff" }}>Md Sharifuzzaman Apu</span>
            <span style={{ fontSize: "0.8rem", color: "#b0e0e6" }}>Computer Engineer</span>
          </div>
        </div>

        {/* Hamburger button */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        {/* Navigation links */}
        <nav
          className={`nav-links ${open ? "open" : ""}`}
          style={{ marginLeft: "auto" }}
        >
          <a href="#hero" style={linkStyle} onClick={(e) => handleScroll(e, "hero")}>
            Home
          </a>
          <a href="#skills" style={linkStyle} onClick={(e) => handleScroll(e, "skills")}>
            Skills
          </a>
          <a href="#projects" style={linkStyle} onClick={(e) => handleScroll(e, "projects")}>
            Projects
          </a>
          <a href="#about" style={linkStyle} onClick={(e) => handleScroll(e, "about")}>
            About Me
          </a>
          <a href="#contact" style={linkStyle} onClick={(e) => handleScroll(e, "contact")}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
