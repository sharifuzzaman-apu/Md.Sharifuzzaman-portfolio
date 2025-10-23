import React from "react";
import myPhoto from "../assets/myphoto.jpg.png";

export default function Hero() {
  const sectionStyle = {
    height: "100vh",
    background: "linear-gradient(135deg, #0f0f0f, #272727)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    position: "relative",
    padding: "70px 20px",
  };

  const imgStyle = {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    border: "4px solid #00bcd4",
    marginBottom: "20px",
    objectFit: "cover",
    boxShadow: "0 0 20px rgba(0,188,212,0.4)",
    transition: "all 0.4s ease",
    zIndex: 1,
  };

  const nameStyle = {
    fontSize: "2.8rem",
    margin: "10px 0",
    letterSpacing: "1px",
    textShadow: "0 0 10px rgba(0,188,212,0.5)",
  };

  const titleStyle = {
    fontWeight: "400",
    fontSize: "1.3rem",
    marginBottom: "15px",
    color: "#b0e0e6",
  };

  const paraStyle = {
    maxWidth: "650px",
    marginTop: "15px",
    lineHeight: "1.7",
    fontSize: "1rem",
    color: "#e0e0e0",
  };

  const btnStyle = {
    backgroundColor: "#00bcd4",
    color: "#fff",
    padding: "12px 30px",
    borderRadius: "30px",
    textDecoration: "none",
    marginTop: "25px",
    fontWeight: "600",
    letterSpacing: "1px",
    transition: "all 0.3s ease",
    boxShadow: "0 0 10px rgba(0, 188, 212, 0.5)",
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 0 25px rgba(0,188,212,0.8)";
  };
  const handleLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 0 10px rgba(0,188,212,0.5)";
  };

  return (
    <section id="hero" style={sectionStyle}>
      <img
        src={myPhoto}
        alt="Sharifuzzaman Apu"
        style={imgStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      />
      <h1 style={nameStyle}>Sharifuzzaman Apu</h1>
      <h3 style={titleStyle}>Front-End Developer | React & JavaScript</h3>
      <p style={paraStyle}>
        I build modern, responsive, and user-friendly web applications using
        React.js, CSS, and JavaScript.
      </p>
      <a
        href="#contact"
        style={btnStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        Hire Me
      </a>
    </section>
  );
}
